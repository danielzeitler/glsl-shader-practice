#ifdef GL_ES 
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 9;

void main() {
  // min returns the smaller of the two arguments of the brackets.
  vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x); 

  float len; 

  for(int i = 0; i < AMOUNT; i++) {
    // length = returns the length of a vector
    len = length(vec2(coord.x, coord.y));

    coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
    coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 12.0);
  }

  gl_FragColor = vec4(cos(len * 2.5), cos(len * 2.0), cos(len * 4.0), 1.0);
}