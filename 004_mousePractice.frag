#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() { 
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec2 mouseCoord = u_mouse.xy / u_resolution;
  gl_FragColor = vec4(sin(coord.x * mouseCoord.x), sin(coord.y * mouseCoord.y), 1.0, 1.0);
}


