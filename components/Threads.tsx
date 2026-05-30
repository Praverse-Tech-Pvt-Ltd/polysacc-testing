'use client'

import { useEffect, useRef } from 'react'

interface ThreadsProps {
  color?: [number, number, number]
  amplitude?: number
  distance?: number
  lineCount?: number
  className?: string
}

const VS = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FS = `
precision highp float;
uniform float u_time;
uniform vec2  u_resolution;
uniform vec3  u_color;
uniform float u_amplitude;
uniform float u_distance;

#define PI 3.14159265
const int LINE_COUNT = 35;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 43.21);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.1 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * 0.18;
  float alpha = 0.0;

  for (int i = 0; i < LINE_COUNT; i++) {
    float p = float(i) / float(LINE_COUNT);

    // S-curve spread: lines fan from center
    float spread = (p - 0.5) * u_distance;
    float n = fbm(vec2(uv.x * 1.8 + t * (0.4 + p * 0.3), p * 3.7 + t * 0.15));
    float wave = u_amplitude * (n - 0.5) * 0.38 * smoothstep(0.0, 0.35, uv.x);

    float cy = 0.5 + spread + wave;
    float thick = 0.0012 + 0.0008 * (1.0 - p);
    float d = abs(uv.y - cy);
    float line = smoothstep(thick * 3.5, thick * 0.5, d);

    // Fade tails: stronger on the right
    float fadeIn  = smoothstep(0.0,  0.12, uv.x);
    float fadeOut = smoothstep(1.0, 0.82, uv.x);
    alpha += line * fadeIn * fadeOut * (0.25 + 0.45 * (1.0 - abs(p - 0.5) * 2.0));
  }

  alpha = clamp(alpha, 0.0, 0.9);
  gl_FragColor = vec4(u_color * alpha, alpha);
}
`

function createShader(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  return sh
}

function createProgram(gl: WebGLRenderingContext) {
  const prog = gl.createProgram()!
  gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER, VS))
  gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, FS))
  gl.linkProgram(prog)
  return prog
}

export default function Threads({
  color = [0.54, 0.67, 0.54],
  amplitude = 1,
  distance = 0.7,
  className = '',
}: ThreadsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    container.appendChild(canvas)

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    gl.clearColor(0, 0, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const prog = createProgram(gl)
    gl.useProgram(prog)

    // Full-screen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes  = gl.getUniformLocation(prog, 'u_resolution')
    const uCol  = gl.getUniformLocation(prog, 'u_color')
    const uAmp  = gl.getUniformLocation(prog, 'u_amplitude')
    const uDist = gl.getUniformLocation(prog, 'u_distance')

    gl.uniform3fv(uCol, color)
    gl.uniform1f(uAmp, amplitude)
    gl.uniform1f(uDist, distance)

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }
    window.addEventListener('resize', resize)
    resize()

    const draw = (t: number) => {
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform1f(uTime, t * 0.001)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      if (container.contains(canvas)) container.removeChild(canvas)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [color, amplitude, distance])

  return <div ref={ref} className={`w-full h-full ${className}`} />
}
