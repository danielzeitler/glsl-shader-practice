#ifdef GL_ES 
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(1.0, 1.0, 0.0);
vec3 colorB = vec3(0.0, 0.0, 1.0);

#define PI 3.14159265359

float plot(vec2 st, float y) {
  return smoothstep(y + 0.01, y, st.y) - smoothstep(y, y - 0.01, st.y);
}

void main() {

  vec2 st = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(st.x);
  vec3 pct = vec3(st.x);

  pct.g = 1.0 - sin(st.x * PI);
  pct.b = 1.0 - abs(sin((st.x * 2.0) - 1.0));

  color = mix(color, vec3(1.0, 0.0, 0.0), plot(st, pct.r));
  color = mix(color, vec3(0.0, 1.0, 0.0), plot(st, pct.g));
  color = mix(color, vec3(0.0, 0.0, 1.0), plot(st, pct.b));
  
  gl_FragColor = vec4(color, 1.0);
}