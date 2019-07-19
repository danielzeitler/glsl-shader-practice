#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
    rgb = rgb * rgb * (3.0-2.0 * rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    // Use polar coordinates instead of cartesian
    vec2 toCenter = vec2(0.5) - st;
    float angle = atan(toCenter.y, toCenter.x);
    float radius = length(toCenter) * 2.0;

    float r = abs(sin(0.332));
    float g = abs(sin(1.0));
    float b = abs(sin(2.5));

    color = hsb2rgb(vec3((TWO_PI + r), radius, 1.0));
    color = hsb2rgb(vec3(g + (angle / TWO_PI), radius, 1.0));
    color = hsb2rgb(vec3(b + (angle / TWO_PI), radius, 1.0));
    // color = hsb2rgb(vec3(-1.0 + (angle / TWO_PI), radius, 1.0));

    gl_FragColor = vec4(color,1.0);
}