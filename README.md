# AFrame-Lamina

Automated port of Lamina to AFrame

```html
<a-lamina geometry="" material="shader:lamina;color:white;lighting:basic;" position="-1 0.5 -3" rotation="0 45 0">
	<a-entity lamina-color="color:red;mode:screen;"></a-entity>
	<a-entity lamina-normal="mode:multiply;alpha:0.5;"></a-entity>
	<a-entity lamina-depth="mode:multiply;mapping:vector;near:0.5;far:2;origin:0 0 1;"></a-entity>
</a-lamina>
```

<!--DOCS-->
### lamina component

| Property | Type     | Description                                                                   | Default |
| :------- | :------- | :---------------------------------------------------------------------------- | :------ |
| layers   | selector | Element that contains the layers, defautls to this element.                   |         |
| color    | color    | Base color                                                                    | "white" |
| alpha    | number   | Alpha                                                                         | 1       |
| lighting | string   | Shading model to use.. One of phong, physical, toon, basic, lambert, standard | "basic" |

### lamina-color component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| color    | color   |                                                                                                                  | "red"    |
| alpha    | number  |                                                                                                                  | 1        |

### lamina-depth component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| near     | number  |                                                                                                                  | 2        |
| far      | number  |                                                                                                                  | 10       |
| origin   | object  |                                                                                                                  | {}       |
| colorA   | color   |                                                                                                                  | "white"  |
| colorB   | color   |                                                                                                                  | "black"  |
| alpha    | number  |                                                                                                                  | 1        |
| mapping  | string  | . One of vector, world, camera                                                                                   | "vector" |

### lamina-fresnel component

| Property  | Type    | Description                                                                                                      | Default  |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode      | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible   | boolean |                                                                                                                  | true     |
| color     | color   |                                                                                                                  | "white"  |
| alpha     | number  |                                                                                                                  | 1        |
| bias      | number  |                                                                                                                  |          |
| intensity | number  |                                                                                                                  | 1        |
| power     | number  |                                                                                                                  | 2        |
| factor    | number  |                                                                                                                  | 1        |

### lamina-gradient component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| colorA   | color   |                                                                                                                  | "white"  |
| colorB   | color   |                                                                                                                  | "black"  |
| alpha    | number  |                                                                                                                  | 1        |
| start    | number  |                                                                                                                  | 1        |
| end      | number  |                                                                                                                  | -1       |
| contrast | number  |                                                                                                                  | 1        |
| axes     | string  | . One of x, y, z                                                                                                 | "x"      |
| mapping  | string  | . One of local, world, uv                                                                                        | "local"  |

### lamina-matcap component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| alpha    | number  |                                                                                                                  | 1        |
| map      | map     |                                                                                                                  |          |

### lamina-noise component

| Property | Type    | Description                                                                                                      | Default   |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :-------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal"  |
| visible  | boolean |                                                                                                                  | true      |
| colorA   | color   |                                                                                                                  | "#666666" |
| colorB   | color   |                                                                                                                  | "#666666" |
| colorC   | color   |                                                                                                                  | "#FFFFFF" |
| colorD   | color   |                                                                                                                  | "#FFFFFF" |
| alpha    | number  |                                                                                                                  | 1         |
| scale    | number  |                                                                                                                  | 1         |
| offset   | object  |                                                                                                                  | {}        |
| type     | string  | . One of perlin, simplex, cell, curl, white                                                                      | "perlin"  |
| mapping  | string  | . One of local, world, uv                                                                                        | "local"   |

### lamina-normal component

| Property  | Type    | Description                                                                                                      | Default  |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode      | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible   | boolean |                                                                                                                  | true     |
| alpha     | number  |                                                                                                                  | 1        |
| direction | object  |                                                                                                                  | {}       |

### lamina-texture component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| alpha    | number  |                                                                                                                  | 1        |
| map      | map     |                                                                                                                  |          |

### lamina-displace component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| strength | number  |                                                                                                                  | 1        |
| scale    | number  |                                                                                                                  | 1        |
| offset   | object  |                                                                                                                  | {}       |
| type     | string  | . One of perlin, simplex, cell, curl, white                                                                      | "perlin" |
| mapping  | string  | . One of local, world, uv                                                                                        | "local"  |

### &lt;a-lamina&gt;

**Default Components:**

| Default component | Settings         |
| :---------------- | :--------------- |
| material          | "shader:lamina;" |

**Entity Attribute Mappings:**

| Property | Mapping             |
| :------- | :------------------ |
| color    | "material.color"    |
| alpha    | "material.alpha"    |
| lighting | "material.lighting" |

<!--DOCS_END-->
