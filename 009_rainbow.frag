#ifdef GL_ES 
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float pct) {
  return smoothstep(pct + 0.01, pct, st.y) - smoothstep(pct, pct - 0.01, st.y);
}

#define PI 3.14159265359

vec3 colorA = vec3(1.0, 0.0, 1.0);
vec3 colorB = vec3(0.451, 1.0, 0.0);
vec3 colorC = vec3(1.0, 1.0, 0.0);
vec3 colorD = vec3(0.0, 0.0, 1.0);

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);
  vec3 pct = vec3(st.x);

  color = mix(step(colorA, colorB), step(colorC, colorD), pct);

  gl_FragColor = vec4(color, 1.0);
}