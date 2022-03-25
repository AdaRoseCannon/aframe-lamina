(function (THREE$1) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var THREE__namespace = /*#__PURE__*/_interopNamespace(THREE$1);

  var literals = [
    // current
      'precision'
    , 'highp'
    , 'mediump'
    , 'lowp'
    , 'attribute'
    , 'const'
    , 'uniform'
    , 'varying'
    , 'break'
    , 'continue'
    , 'do'
    , 'for'
    , 'while'
    , 'if'
    , 'else'
    , 'in'
    , 'out'
    , 'inout'
    , 'float'
    , 'int'
    , 'uint'
    , 'void'
    , 'bool'
    , 'true'
    , 'false'
    , 'discard'
    , 'return'
    , 'mat2'
    , 'mat3'
    , 'mat4'
    , 'vec2'
    , 'vec3'
    , 'vec4'
    , 'ivec2'
    , 'ivec3'
    , 'ivec4'
    , 'bvec2'
    , 'bvec3'
    , 'bvec4'
    , 'sampler1D'
    , 'sampler2D'
    , 'sampler3D'
    , 'samplerCube'
    , 'sampler1DShadow'
    , 'sampler2DShadow'
    , 'struct'

    // future
    , 'asm'
    , 'class'
    , 'union'
    , 'enum'
    , 'typedef'
    , 'template'
    , 'this'
    , 'packed'
    , 'goto'
    , 'switch'
    , 'default'
    , 'inline'
    , 'noinline'
    , 'volatile'
    , 'public'
    , 'static'
    , 'extern'
    , 'external'
    , 'interface'
    , 'long'
    , 'short'
    , 'double'
    , 'half'
    , 'fixed'
    , 'unsigned'
    , 'input'
    , 'output'
    , 'hvec2'
    , 'hvec3'
    , 'hvec4'
    , 'dvec2'
    , 'dvec3'
    , 'dvec4'
    , 'fvec2'
    , 'fvec3'
    , 'fvec4'
    , 'sampler2DRect'
    , 'sampler3DRect'
    , 'sampler2DRectShadow'
    , 'sizeof'
    , 'cast'
    , 'namespace'
    , 'using'
  ];

  var operators = [
      '<<='
    , '>>='
    , '++'
    , '--'
    , '<<'
    , '>>'
    , '<='
    , '>='
    , '=='
    , '!='
    , '&&'
    , '||'
    , '+='
    , '-='
    , '*='
    , '/='
    , '%='
    , '&='
    , '^^'
    , '^='
    , '|='
    , '('
    , ')'
    , '['
    , ']'
    , '.'
    , '!'
    , '~'
    , '*'
    , '/'
    , '%'
    , '+'
    , '-'
    , '<'
    , '>'
    , '&'
    , '^'
    , '|'
    , '?'
    , ':'
    , '='
    , ','
    , ';'
    , '{'
    , '}'
  ];

  var builtins = [
    // Keep this list sorted
    'abs'
    , 'acos'
    , 'all'
    , 'any'
    , 'asin'
    , 'atan'
    , 'ceil'
    , 'clamp'
    , 'cos'
    , 'cross'
    , 'dFdx'
    , 'dFdy'
    , 'degrees'
    , 'distance'
    , 'dot'
    , 'equal'
    , 'exp'
    , 'exp2'
    , 'faceforward'
    , 'floor'
    , 'fract'
    , 'gl_BackColor'
    , 'gl_BackLightModelProduct'
    , 'gl_BackLightProduct'
    , 'gl_BackMaterial'
    , 'gl_BackSecondaryColor'
    , 'gl_ClipPlane'
    , 'gl_ClipVertex'
    , 'gl_Color'
    , 'gl_DepthRange'
    , 'gl_DepthRangeParameters'
    , 'gl_EyePlaneQ'
    , 'gl_EyePlaneR'
    , 'gl_EyePlaneS'
    , 'gl_EyePlaneT'
    , 'gl_Fog'
    , 'gl_FogCoord'
    , 'gl_FogFragCoord'
    , 'gl_FogParameters'
    , 'gl_FragColor'
    , 'gl_FragCoord'
    , 'gl_FragData'
    , 'gl_FragDepth'
    , 'gl_FragDepthEXT'
    , 'gl_FrontColor'
    , 'gl_FrontFacing'
    , 'gl_FrontLightModelProduct'
    , 'gl_FrontLightProduct'
    , 'gl_FrontMaterial'
    , 'gl_FrontSecondaryColor'
    , 'gl_LightModel'
    , 'gl_LightModelParameters'
    , 'gl_LightModelProducts'
    , 'gl_LightProducts'
    , 'gl_LightSource'
    , 'gl_LightSourceParameters'
    , 'gl_MaterialParameters'
    , 'gl_MaxClipPlanes'
    , 'gl_MaxCombinedTextureImageUnits'
    , 'gl_MaxDrawBuffers'
    , 'gl_MaxFragmentUniformComponents'
    , 'gl_MaxLights'
    , 'gl_MaxTextureCoords'
    , 'gl_MaxTextureImageUnits'
    , 'gl_MaxTextureUnits'
    , 'gl_MaxVaryingFloats'
    , 'gl_MaxVertexAttribs'
    , 'gl_MaxVertexTextureImageUnits'
    , 'gl_MaxVertexUniformComponents'
    , 'gl_ModelViewMatrix'
    , 'gl_ModelViewMatrixInverse'
    , 'gl_ModelViewMatrixInverseTranspose'
    , 'gl_ModelViewMatrixTranspose'
    , 'gl_ModelViewProjectionMatrix'
    , 'gl_ModelViewProjectionMatrixInverse'
    , 'gl_ModelViewProjectionMatrixInverseTranspose'
    , 'gl_ModelViewProjectionMatrixTranspose'
    , 'gl_MultiTexCoord0'
    , 'gl_MultiTexCoord1'
    , 'gl_MultiTexCoord2'
    , 'gl_MultiTexCoord3'
    , 'gl_MultiTexCoord4'
    , 'gl_MultiTexCoord5'
    , 'gl_MultiTexCoord6'
    , 'gl_MultiTexCoord7'
    , 'gl_Normal'
    , 'gl_NormalMatrix'
    , 'gl_NormalScale'
    , 'gl_ObjectPlaneQ'
    , 'gl_ObjectPlaneR'
    , 'gl_ObjectPlaneS'
    , 'gl_ObjectPlaneT'
    , 'gl_Point'
    , 'gl_PointCoord'
    , 'gl_PointParameters'
    , 'gl_PointSize'
    , 'gl_Position'
    , 'gl_ProjectionMatrix'
    , 'gl_ProjectionMatrixInverse'
    , 'gl_ProjectionMatrixInverseTranspose'
    , 'gl_ProjectionMatrixTranspose'
    , 'gl_SecondaryColor'
    , 'gl_TexCoord'
    , 'gl_TextureEnvColor'
    , 'gl_TextureMatrix'
    , 'gl_TextureMatrixInverse'
    , 'gl_TextureMatrixInverseTranspose'
    , 'gl_TextureMatrixTranspose'
    , 'gl_Vertex'
    , 'greaterThan'
    , 'greaterThanEqual'
    , 'inversesqrt'
    , 'length'
    , 'lessThan'
    , 'lessThanEqual'
    , 'log'
    , 'log2'
    , 'matrixCompMult'
    , 'max'
    , 'min'
    , 'mix'
    , 'mod'
    , 'normalize'
    , 'not'
    , 'notEqual'
    , 'pow'
    , 'radians'
    , 'reflect'
    , 'refract'
    , 'sign'
    , 'sin'
    , 'smoothstep'
    , 'sqrt'
    , 'step'
    , 'tan'
    , 'texture2D'
    , 'texture2DLod'
    , 'texture2DProj'
    , 'texture2DProjLod'
    , 'textureCube'
    , 'textureCubeLod'
    , 'texture2DLodEXT'
    , 'texture2DProjLodEXT'
    , 'textureCubeLodEXT'
    , 'texture2DGradEXT'
    , 'texture2DProjGradEXT'
    , 'textureCubeGradEXT'
  ];

  var literals300es = literals.slice().concat([
     'layout'
    , 'centroid'
    , 'smooth'
    , 'case'
    , 'mat2x2'
    , 'mat2x3'
    , 'mat2x4'
    , 'mat3x2'
    , 'mat3x3'
    , 'mat3x4'
    , 'mat4x2'
    , 'mat4x3'
    , 'mat4x4'
    , 'uvec2'
    , 'uvec3'
    , 'uvec4'
    , 'samplerCubeShadow'
    , 'sampler2DArray'
    , 'sampler2DArrayShadow'
    , 'isampler2D'
    , 'isampler3D'
    , 'isamplerCube'
    , 'isampler2DArray'
    , 'usampler2D'
    , 'usampler3D'
    , 'usamplerCube'
    , 'usampler2DArray'
    , 'coherent'
    , 'restrict'
    , 'readonly'
    , 'writeonly'
    , 'resource'
    , 'atomic_uint'
    , 'noperspective'
    , 'patch'
    , 'sample'
    , 'subroutine'
    , 'common'
    , 'partition'
    , 'active'
    , 'filter'
    , 'image1D'
    , 'image2D'
    , 'image3D'
    , 'imageCube'
    , 'iimage1D'
    , 'iimage2D'
    , 'iimage3D'
    , 'iimageCube'
    , 'uimage1D'
    , 'uimage2D'
    , 'uimage3D'
    , 'uimageCube'
    , 'image1DArray'
    , 'image2DArray'
    , 'iimage1DArray'
    , 'iimage2DArray'
    , 'uimage1DArray'
    , 'uimage2DArray'
    , 'image1DShadow'
    , 'image2DShadow'
    , 'image1DArrayShadow'
    , 'image2DArrayShadow'
    , 'imageBuffer'
    , 'iimageBuffer'
    , 'uimageBuffer'
    , 'sampler1DArray'
    , 'sampler1DArrayShadow'
    , 'isampler1D'
    , 'isampler1DArray'
    , 'usampler1D'
    , 'usampler1DArray'
    , 'isampler2DRect'
    , 'usampler2DRect'
    , 'samplerBuffer'
    , 'isamplerBuffer'
    , 'usamplerBuffer'
    , 'sampler2DMS'
    , 'isampler2DMS'
    , 'usampler2DMS'
    , 'sampler2DMSArray'
    , 'isampler2DMSArray'
    , 'usampler2DMSArray'
  ]);

  // 300es builtins/reserved words that were previously valid in v100
  var v100 = builtins;

  // The texture2D|Cube functions have been removed
  // And the gl_ features are updated
  v100 = v100.slice().filter(function (b) {
    return !/^(gl\_|texture)/.test(b)
  });

  var builtins300es = v100.concat([
    // the updated gl_ constants
      'gl_VertexID'
    , 'gl_InstanceID'
    , 'gl_Position'
    , 'gl_PointSize'
    , 'gl_FragCoord'
    , 'gl_FrontFacing'
    , 'gl_FragDepth'
    , 'gl_PointCoord'
    , 'gl_MaxVertexAttribs'
    , 'gl_MaxVertexUniformVectors'
    , 'gl_MaxVertexOutputVectors'
    , 'gl_MaxFragmentInputVectors'
    , 'gl_MaxVertexTextureImageUnits'
    , 'gl_MaxCombinedTextureImageUnits'
    , 'gl_MaxTextureImageUnits'
    , 'gl_MaxFragmentUniformVectors'
    , 'gl_MaxDrawBuffers'
    , 'gl_MinProgramTexelOffset'
    , 'gl_MaxProgramTexelOffset'
    , 'gl_DepthRangeParameters'
    , 'gl_DepthRange'

    // other builtins
    , 'trunc'
    , 'round'
    , 'roundEven'
    , 'isnan'
    , 'isinf'
    , 'floatBitsToInt'
    , 'floatBitsToUint'
    , 'intBitsToFloat'
    , 'uintBitsToFloat'
    , 'packSnorm2x16'
    , 'unpackSnorm2x16'
    , 'packUnorm2x16'
    , 'unpackUnorm2x16'
    , 'packHalf2x16'
    , 'unpackHalf2x16'
    , 'outerProduct'
    , 'transpose'
    , 'determinant'
    , 'inverse'
    , 'texture'
    , 'textureSize'
    , 'textureProj'
    , 'textureLod'
    , 'textureOffset'
    , 'texelFetch'
    , 'texelFetchOffset'
    , 'textureProjOffset'
    , 'textureLodOffset'
    , 'textureProjLod'
    , 'textureProjLodOffset'
    , 'textureGrad'
    , 'textureGradOffset'
    , 'textureProjGrad'
    , 'textureProjGradOffset'
  ]);

  var glslTokenizer = tokenize;



  var NORMAL = 999          // <-- never emitted
    , TOKEN = 9999          // <-- never emitted
    , BLOCK_COMMENT = 0
    , LINE_COMMENT = 1
    , PREPROCESSOR = 2
    , OPERATOR = 3
    , INTEGER = 4
    , FLOAT = 5
    , IDENT = 6
    , BUILTIN = 7
    , KEYWORD = 8
    , WHITESPACE = 9
    , EOF = 10
    , HEX = 11;

  var map = [
      'block-comment'
    , 'line-comment'
    , 'preprocessor'
    , 'operator'
    , 'integer'
    , 'float'
    , 'ident'
    , 'builtin'
    , 'keyword'
    , 'whitespace'
    , 'eof'
    , 'integer'
  ];

  function tokenize(opt) {
    var i = 0
      , total = 0
      , mode = NORMAL
      , c
      , last
      , content = []
      , tokens = []
      , line = 1
      , col = 0
      , start = 0
      , isnum = false
      , isoperator = false
      , input = ''
      , len;

    opt = opt || {};
    var allBuiltins = builtins;
    var allLiterals = literals;
    if (opt.version === '300 es') {
      allBuiltins = builtins300es;
      allLiterals = literals300es;
    }

    // cache by name
    var builtinsDict = {}, literalsDict = {};
    for (var i = 0; i < allBuiltins.length; i++) {
      builtinsDict[allBuiltins[i]] = true;
    }
    for (var i = 0; i < allLiterals.length; i++) {
      literalsDict[allLiterals[i]] = true;
    }

    return function(data) {
      tokens = [];
      if (data !== null) return write(data)
      return end()
    }

    function token(data) {
      if (data.length) {
        tokens.push({
          type: map[mode]
        , data: data
        , position: start
        , line: line
        , column: col
        });
      }
    }

    function write(chunk) {
      i = 0;

      if (chunk.toString) chunk = chunk.toString();

      input += chunk.replace(/\r\n/g, '\n');
      len = input.length;


      var last;

      while(c = input[i], i < len) {
        last = i;

        switch(mode) {
          case BLOCK_COMMENT: i = block_comment(); break
          case LINE_COMMENT: i = line_comment(); break
          case PREPROCESSOR: i = preprocessor(); break
          case OPERATOR: i = operator(); break
          case INTEGER: i = integer(); break
          case HEX: i = hex(); break
          case FLOAT: i = decimal(); break
          case TOKEN: i = readtoken(); break
          case WHITESPACE: i = whitespace(); break
          case NORMAL: i = normal(); break
        }

        if(last !== i) {
          switch(input[last]) {
            case '\n': col = 0; ++line; break
            default: ++col; break
          }
        }
      }

      total += i;
      input = input.slice(i);
      return tokens
    }

    function end(chunk) {
      if(content.length) {
        token(content.join(''));
      }

      mode = EOF;
      token('(eof)');
      return tokens
    }

    function normal() {
      content = content.length ? [] : content;

      if(last === '/' && c === '*') {
        start = total + i - 1;
        mode = BLOCK_COMMENT;
        last = c;
        return i + 1
      }

      if(last === '/' && c === '/') {
        start = total + i - 1;
        mode = LINE_COMMENT;
        last = c;
        return i + 1
      }

      if(c === '#') {
        mode = PREPROCESSOR;
        start = total + i;
        return i
      }

      if(/\s/.test(c)) {
        mode = WHITESPACE;
        start = total + i;
        return i
      }

      isnum = /\d/.test(c);
      isoperator = /[^\w_]/.test(c);

      start = total + i;
      mode = isnum ? INTEGER : isoperator ? OPERATOR : TOKEN;
      return i
    }

    function whitespace() {
      if(/[^\s]/g.test(c)) {
        token(content.join(''));
        mode = NORMAL;
        return i
      }
      content.push(c);
      last = c;
      return i + 1
    }

    function preprocessor() {
      if((c === '\r' || c === '\n') && last !== '\\') {
        token(content.join(''));
        mode = NORMAL;
        return i
      }
      content.push(c);
      last = c;
      return i + 1
    }

    function line_comment() {
      return preprocessor()
    }

    function block_comment() {
      if(c === '/' && last === '*') {
        content.push(c);
        token(content.join(''));
        mode = NORMAL;
        return i + 1
      }

      content.push(c);
      last = c;
      return i + 1
    }

    function operator() {
      if(last === '.' && /\d/.test(c)) {
        mode = FLOAT;
        return i
      }

      if(last === '/' && c === '*') {
        mode = BLOCK_COMMENT;
        return i
      }

      if(last === '/' && c === '/') {
        mode = LINE_COMMENT;
        return i
      }

      if(c === '.' && content.length) {
        while(determine_operator(content));

        mode = FLOAT;
        return i
      }

      if(c === ';' || c === ')' || c === '(') {
        if(content.length) while(determine_operator(content));
        token(c);
        mode = NORMAL;
        return i + 1
      }

      var is_composite_operator = content.length === 2 && c !== '=';
      if(/[\w_\d\s]/.test(c) || is_composite_operator) {
        while(determine_operator(content));
        mode = NORMAL;
        return i
      }

      content.push(c);
      last = c;
      return i + 1
    }

    function determine_operator(buf) {
      var j = 0
        , idx
        , res;

      do {
        idx = operators.indexOf(buf.slice(0, buf.length + j).join(''));
        res = operators[idx];

        if(idx === -1) {
          if(j-- + buf.length > 0) continue
          res = buf.slice(0, 1).join('');
        }

        token(res);

        start += res.length;
        content = content.slice(res.length);
        return content.length
      } while(1)
    }

    function hex() {
      if(/[^a-fA-F0-9]/.test(c)) {
        token(content.join(''));
        mode = NORMAL;
        return i
      }

      content.push(c);
      last = c;
      return i + 1
    }

    function integer() {
      if(c === '.') {
        content.push(c);
        mode = FLOAT;
        last = c;
        return i + 1
      }

      if(/[eE]/.test(c)) {
        content.push(c);
        mode = FLOAT;
        last = c;
        return i + 1
      }

      if(c === 'x' && content.length === 1 && content[0] === '0') {
        mode = HEX;
        content.push(c);
        last = c;
        return i + 1
      }

      if(/[^\d]/.test(c)) {
        token(content.join(''));
        mode = NORMAL;
        return i
      }

      content.push(c);
      last = c;
      return i + 1
    }

    function decimal() {
      if(c === 'f') {
        content.push(c);
        last = c;
        i += 1;
      }

      if(/[eE]/.test(c)) {
        content.push(c);
        last = c;
        return i + 1
      }

      if ((c === '-' || c === '+') && /[eE]/.test(last)) {
        content.push(c);
        last = c;
        return i + 1
      }

      if(/[^\d]/.test(c)) {
        token(content.join(''));
        mode = NORMAL;
        return i
      }

      content.push(c);
      last = c;
      return i + 1
    }

    function readtoken() {
      if(/[^\d\w_]/.test(c)) {
        var contentstr = content.join('');
        if(literalsDict[contentstr]) {
          mode = KEYWORD;
        } else if(builtinsDict[contentstr]) {
          mode = BUILTIN;
        } else {
          mode = IDENT;
        }
        token(content.join(''));
        mode = NORMAL;
        return i
      }
      content.push(c);
      last = c;
      return i + 1
    }
  }

  var string = tokenizeString;

  function tokenizeString(str, opt) {
    var generator = glslTokenizer(opt);
    var tokens = [];

    tokens = tokens.concat(generator(str));
    tokens = tokens.concat(generator(null));

    return tokens
  }

  var glslTokenDepth = getTokenDepth;

  function getTokenDepth(tokens) {
    var loop  = false;
    var depth = 0;

    for (var i = 0; i < tokens.length; i++) {
      loop = loop || (tokens[i].type === 'keyword' && (
        tokens[i].data === 'for'
      ));

      switch (tokens[i].data) {
        case '(': tokens[i].depth = loop ? depth++ : depth; break
        case '{': tokens[i].depth = loop ? depth : depth++; loop = false; break
        case '}': tokens[i].depth = --depth; break
        default:  tokens[i].depth = depth;
      }
    }

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var index = i + 1;
      if (token.type !== 'ident' && token.type !== 'keyword') continue
      skipArrayArguments();
      if (tokens[index].type !== 'ident') continue
      skipArrayArguments();
      index++;
      if (tokens[index].data !== '(') continue

      while (tokens[index] && tokens[index].data !== ';' && tokens[index].data !== '{') {
        tokens[index++].depth++;
      }
      if (tokens[index] && tokens[index].data === '{') tokens[index].depth++;
    }

    return tokens

    function skipArrayArguments() {
      while (tokens[index] && (
        tokens[index].type === 'whitespace' ||
        tokens[index].data === '[' ||
        tokens[index].data === ']' ||
        tokens[index].data === 'integer'
      )) index++;
    }
  }

  var glslTokenScope = tokenScope;

  function tokenScope(tokens) {
    var stack  = [0];
    var inc    = stack[0];
    var ldepth = 0;

    if (!tokens || !tokens.length) return tokens
    if (!('depth' in tokens[0])) {
      throw new Error('glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first')
    }

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var depth = token.depth;

      if (depth > ldepth) {
        stack.push(++inc);
      } else
      if (depth < ldepth) {
        stack.splice(-1, 1);
      }

      token.scope = stack[stack.length - 1];
      token.stack = stack.slice();
      ldepth = token.depth;
    }

    return tokens
  }

  var glslTokenProperties = properties;

  function properties(tokens) {
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      token.property = false;

      if (token.type !== 'ident') continue

      var j = i;
      while (tokens[--j] && tokens[j].type === 'whitespace');
      if (!tokens[j]) continue
      if (tokens[j].type !== 'operator') continue
      if (tokens[j].data !== '.') continue

      token.property = true;
    }

    return tokens
  }

  var assignments = {
      '<<=': true
    , '>>=': true
    , '++': true
    , '--': true
    , '+=': true
    , '-=': true
    , '*=': true
    , '/=': true
    , '%=': true
    , '&=': true
    , '^=': true
    , '|=': true
    , '=': true
  };

  var ignored = {
      'precision': true
    , 'highp': true
    , 'mediump': true
    , 'lowp': true
    , 'attribute': true
    , 'const': true
    , 'uniform': true
    , 'varying': true
    , 'break': true
    , 'continue': true
    , 'do': true
    , 'for': true
    , 'while': true
    , 'if': true
    , 'else': true
    , 'in': true
    , 'out': true
    , 'inout': true
    , 'true': true
    , 'false': true
    , 'return': true
  };

  var glslTokenAssignments = assigns;

  // Here be dragons. Apologies in advance for the hairy code!
  function assigns(tokens) {
    var idx = 0;

    // Determine if a value has been assigned, e.g.
    // x = 1.0;
    // float x = 1.0;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var type  = token.type;

      token.assignment = false;
      token.declaration = false;
      if (type !== 'ident' && type !== 'builtin') continue
      idx = i + 1;

      skipWhitespace();
      if (tokens[idx].type !== 'operator') continue
      if (!assignments[tokens[idx].data]) continue
      token.assignment = true;
    }

    // Determine if a value is being defined, e.g.
    // float x;
    // float x, y, z;
    // float x, y = vec3(sin(1.0 + 3.0)), z;
    // float[3][2] x, y = vec3(sin(1.0 + 3.0)), z;
    // float[][2] x, y = vec3(sin(1.0 + 3.0)), z;
    // float x[2], y = vec3(sin(1.0 + 3.0)), z[4];
    // float x(float y, float z) {};
    // float x(float y[2], Thing[3] z) {};
    // Thing x[2], y = Another(sin(1.0 + 3.0)), z[4];
    for (var i = 0; i < tokens.length; i++) {
      var datatype = tokens[i];
      var type     = datatype.type;
      var data     = datatype.data;

      datatype.declaration = false;

      if (type === 'keyword') {
        if (ignored[data]) continue
      } else
      if (type !== 'ident') continue

      idx = i + 1;

      skipArrayDimensions();
      if (tokens[idx].type !== 'ident') continue
      tokens[idx++].declaration = true;
      skipArrayDimensions();

      // Function arguments/parameters
      if (tokens[idx].data === '(') {
        idx++;

        skipWhitespace();
        while (tokens[idx] && tokens[idx].data !== ')') {
          if (tokens[idx].type !== 'keyword' && tokens[idx].type !== 'ident') break
          idx++;
          skipWhitespace();
          if (tokens[idx].type !== 'ident') continue
          tokens[idx++].declaration = true;
          skipWhitespace();
          skipArrayDimensions();
          skipWhitespace();
          if (tokens[idx].data !== ',') continue
          idx++;
          skipWhitespace();
        }

        i = idx;
        continue
      }

      // Declaration Lists
      while (tokens[idx] && tokens[idx].data !== ';') {
        if (tokens[idx].data === ',') {
          idx++;
          skipWhitespace();
          if (tokens[idx].declaration = tokens[idx].type === 'ident') idx++;
        } else {
          skipWhitespace();
          skipParens();
          skipWhitespace();
          idx++;
        }
      }

      i = idx;
    }

    // Handle struct declarations:
    // struct declaration {
    //   float x, y, z;
    //   Other w;
    // } declaration;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (token.type !== 'keyword') continue
      if (token.data !== 'struct') continue
      idx = i + 1;
      skipWhitespace();
      if (tokens[idx].type !== 'ident') continue

      idx++;
      skipWhitespace();
      if (tokens[idx++].data !== '{') continue
      skipWhitespace();

      while (tokens[idx].type === 'ident' || tokens[idx].type === 'keyword') {
        do {
          idx++;
          skipWhitespace();
          tokens[idx].structMember = true;
          tokens[idx].declaration = false;
          idx++;
          skipArrayDimensions();
        } while (tokens[idx].data === ',')

        if (tokens[idx].data === ';') idx++;
        skipWhitespace();
      }

      idx++;
      skipWhitespace();
      if (tokens[idx].type !== 'ident') continue
      tokens[idx].declaration = true;
      skipWhitespace();

      while (tokens[++idx].data === ',') {
        skipWhitespace();
        idx++;
        skipWhitespace();
        if (tokens[idx].type === 'ident') tokens[idx].declaration = true;
        skipWhitespace();
      }
    }

    return tokens

    function skipWhitespace(n) {
      while (tokens[idx] && tokens[idx].type === 'whitespace') idx++;
    }

    function skipArrayDimensions() {
      while (tokens[idx] && (
           tokens[idx].type === 'integer'
        || tokens[idx].data === '['
        || tokens[idx].data === ']'
        || tokens[idx].type === 'whitespace'
      )) idx++;
    }

    function skipParens() {
      if (!tokens[idx]) return
      if (tokens[idx].data !== '(') return
      var depth = 0;
      do {
        if (tokens[idx].data === ';') break
        if (tokens[idx].data === '(') depth++;
        if (tokens[idx].data === ')') depth--;
      } while(depth && tokens[++idx])
    }
  }

  var glslTokenDescope_1 = glslTokenDescope;

  function glslTokenDescope(tokens, rename) {
    glslTokenDepth(tokens);
    glslTokenScope(tokens);
    glslTokenProperties(tokens);
    glslTokenAssignments(tokens);

    var scope   = getScope(tokens);
    var renamer = rename || defaultRenamer();
    var map     = {};

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var stack = token.stack;
      var name  = token.data;

      token.descoped = false;

      if (token.type !== 'ident') continue
      if (token.property) continue
      if (token.structMember) continue

      var bound = false;

      for (var j = stack.length - 1; j >= 0; j--) {
        var s = scope[stack[j]];
        if (!s) continue
        if (!s[name]) continue

        bound = true;

        // exit if declaration not in top-level scope
        if (j) break

        token.descoped = token.data;
        token.data = map[name] = map[name] || renamer(name, token) || token.data;
      }

      // Handle unbound variables, i.e. ones not defined anywhere
      // in the shader source but still used.
      if (!bound) {
        token.descoped = token.data;
        token.data = map[name] = map[name] || renamer(name, token) || token.data;
      }
    }

    return tokens
  }

  function defaultRenamer() {
    var k = 0;

    return function rename(name) {
      return name + '_' + (k++).toString(36)
    }
  }

  function getScope(tokens) {
    var scope = {};

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (token.declaration) {
        scope[token.scope] = scope[token.scope] || {};
        scope[token.scope][token.data] = token;
      }
    }

    return scope
  }

  var glslTokenString = toString;

  function toString(tokens) {
    var output = [];

    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i].type === 'eof') continue
      output.push(tokens[i].data);
    }

    return output.join('')
  }

  var glslTokenFunctions = functions;

  function functions (tokens) {
    var returnType = null;
    var defnName = null;
    var braceDepth = 0;
    var braceStart = 0;
    var defnStart = 0;
    var argFinish = 0;
    var argStart = 0;
    var output = [];
    var i, j, token;

    // The following loop detects functions with bodies of any type,
    // including structs. e.g.
    // void main() {...}
    // vec4 fn(vec3 a) {...}
    // Ray3 fn(vec3 ro, vec3 rd) {...}
    for (i = 0, j; i < tokens.length; i++) {
      token = tokens[i];
      if (token.data === '{') {
        // If already in a function, keep track of opening braces
        if (braceDepth && braceDepth++) continue

        // Stepping backwards from the closing brace, find the end
        // of the arguments list. There should only be whitespace on
        // the way there.
        j = findPrevious(i, findOp(')'), findOp());
        if (j < 0) continue
        argFinish = j;

        // Step backwards to find the beginning of the arguments list. If there's
        // a nested paranthesis in there, then it's definitely not a function.
        j = findPrevious(j, findOp('('), findOp(')'));
        if (j < 0) continue
        argStart = j;

        // Continue stepping backwards past any whitespace to find the
        // function name. If the token isn't an identifier then it's not a
        // function so we bail
        j = findPrevious(j, findGlyph);
        if (j < 0) continue
        if (tokens[j].type !== 'ident') continue
        defnName = tokens[j].data;

        // The next non-whitespace token should be the return type of
        // the function
        j = findPrevious(j, findGlyph);
        if (j < 0) continue

        braceDepth = 1;
        braceStart = i;
        returnType = tokens[j].data;
        defnStart = j;

        // There are cases when a function definition includes a
        // precision qualifier, e.g. highp float random();
        // So we backtrack one extra step to check if that's the
        // case, and handle it :)
        var k = findPrevious(j, findGlyph);
        switch (tokens[k] && tokens[k].data) {
          case 'lowp':
          case 'highp':
          case 'mediump':
            defnStart = k;
        }
      } else
      if (braceDepth && token.data === '}') {
        if (--braceDepth) continue

        output.push({
          name: defnName,
          type: returnType,
          body: [braceStart + 1, i],
          args: [argStart, argFinish + 1],
          outer: [defnStart, i + 1]
        });
      }
    }

    // This loop is for handling the edge case of functions defined
    // without a body. Generally, this body is defined later in the file.
    // void main();
    // vec2 doModel(vec3 p);
    // Note the replacement of curly braces with a semicolon.
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      if (token.data === ';') {
        // Like before, we start from a semicolon and find the
        // bounds of the argument list to find the function name
        j = findPrevious(i, findOp(')'), findOp());
        if (j < 0) continue
        argFinish = j;
        j = findPrevious(j, findOp('('), findOp(')'));
        if (j < 0) continue
        argStart = j;
        j = findPrevious(j, findGlyph);
        if (j < 0) continue
        if (tokens[j].type !== 'ident') continue
        defnName = tokens[j].data;

        // Try and find an ident or builtin character, which should be
        // our return type. If so, it'll be the very first preceding glyph.
        j = findPrevious(j, findGlyph);
        if (j < 0) continue
        if (tokens[j].type === 'operator') continue
        if (tokens[j].data === 'return') continue
        returnType = tokens[j].data;

        output.push({
          name: defnName,
          type: returnType,
          body: false,
          args: [argStart, argFinish + 1],
          outer: [j, i + 1]
        });
      }
    }

    return output.sort(function (a, b) {
      return a.outer[0] - b.outer[0]
    })

    function findPrevious (start, match, bail) {
      for (var i = start - 1; i >= 0; i--) {
        if (match(tokens[i])) return i
        if (bail && bail(tokens[i])) return -1
      }

      return -1
    }
  }

  function findOp (data) {
    return function (token) {
      return token.type === 'operator' && (!data || token.data === data)
    }
  }

  function findGlyph (token) {
    return token.type !== 'whitespace'
  }

  var keywords = {
    positon: 'csm_Position',
    emissive: 'csm_Emissive',
    normal: 'csm_Normal',
    pointSize: 'csm_PointSize',
    diffuseColor: 'csm_DiffuseColor',
    fragColor: 'csm_FragColor'
  };

  const VERT = {
    [`${keywords.normal}`]: {
      '#include <defaultnormal_vertex>': `
    vec3 transformedNormal = ${keywords.normal};
    #ifdef USE_INSTANCING
    	// this is in lieu of a per-instance normal-matrix
    	// shear transforms in the instance matrix are not supported
    	mat3 m = mat3( instanceMatrix );
    	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    	transformedNormal = m * transformedNormal;
    #endif
    transformedNormal = normalMatrix * transformedNormal;
    #ifdef FLIP_SIDED
    	transformedNormal = - transformedNormal;
    #endif
    #ifdef USE_TANGENT
    	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
    	#ifdef FLIP_SIDED
    		transformedTangent = - transformedTangent;
    	#endif
    #endif
    `
    },
    [`${keywords.positon}`]: {
      '#include <project_vertex>': `
    transformed = ${keywords.positon};
    #include <project_vertex>
  `
    },
    [`${keywords.pointSize}`]: {
      'gl_PointSize = size;': `gl_PointSize = ${keywords.pointSize};`
    }
  };
  const FRAG = {
    [`${keywords.diffuseColor}`]: {
      '#include <color_fragment>': `
    #include <color_fragment>
    diffuseColor = ${keywords.diffuseColor};
  `
    },
    [`${keywords.fragColor}`]: {
      '#include <output_fragment>': `
    #include <output_fragment>
    gl_FragColor  = ${keywords.fragColor};
  `
    },
    [`${keywords.emissive}`]: {
      'vec3 totalEmissiveRadiance = emissive;': `
    vec3 totalEmissiveRadiance = ${keywords.emissive};
    `
    }
  };

  class CustomShaderMaterial extends THREE$1.Material {
    constructor(baseMaterial, fragmentShader, vertexShader, uniforms, opts) {
      // @ts-ignore
      const base = new baseMaterial(opts);
      super();
      this.base = base;
      this.uniforms = uniforms || {};

      for (const key in this.base) {
        // @ts-ignore
        if (this[key] === undefined) this[key] = 0; // @ts-ignore

        this[key] = this.base[key];
      }

      this.update(fragmentShader, vertexShader, uniforms);
    }

    update(fragmentShader, vertexShader, uniforms) {
      this.generateMaterial(fragmentShader, vertexShader, uniforms);
    }

    generateMaterial(fragmentShader, vertexShader, uniforms) {
      const parsedFragmentShdaer = this.parseShader(fragmentShader);
      const parsedVertexShdaer = this.parseShader(vertexShader);
      this.uniforms = uniforms || {};

      this.customProgramCacheKey = () => {
        return this.uuid;
      };

      this.onBeforeCompile = shader => {
        if (parsedFragmentShdaer) {
          const patchedFragmentShdaer = this.patchShader(parsedFragmentShdaer, shader.fragmentShader, FRAG);
          shader.fragmentShader = patchedFragmentShdaer;
        }

        if (parsedVertexShdaer) {
          const patchedVertexShdaer = this.patchShader(parsedVertexShdaer, shader.vertexShader, VERT);
          shader.vertexShader = '#define IS_VERTEX;\n' + patchedVertexShdaer;
        }

        shader.uniforms = { ...shader.uniforms,
          ...this.uniforms
        };
        this.uniforms = shader.uniforms;
        this.needsUpdate = true;
      };
    }

    patchShader(customShader, shader, patchMap) {
      let patchedShader = shader;
      Object.keys(patchMap).forEach(name => {
        Object.keys(patchMap[name]).forEach(key => {
          if (customShader.main.includes(name)) {
            patchedShader = replaceAll(patchedShader, key, patchMap[name][key]);
          }
        });
      });
      patchedShader = patchedShader.replace('void main() {', `
          ${customShader.header}
          void main() {
            vec3 csm_Position;
            vec3 csm_Normal;
            vec3 csm_Emissive;

            #ifdef IS_VERTEX
              csm_Position = position;
            #endif

            #ifdef IS_VERTEX
              csm_Normal = normal;
            #endif
            
            #ifndef IS_VERTEX
              #ifdef STANDARD
                csm_Emissive = emissive;
              #endif
            #endif

            vec4 csm_DiffuseColor = vec4(1., 0., 0., 1.);
            vec4 csm_FragColor = vec4(1., 0., 0., 1.);
            float csm_PointSize = 1.;

            ${customShader.main}
          `);
      patchedShader = customShader.defines + patchedShader;
      return patchedShader;
    }

    parseShader(shader) {
      if (!shader) return;
      const parsedShader = {
        defines: '',
        header: '',
        main: ''
      };
      const main = shader.match(/void\s*main\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}/g);

      if (main != null && main.length) {
        const mainBody = main[0].match(/\{((.|\n)*?)\}/g);

        if (mainBody != null && mainBody.length) {
          parsedShader.main = mainBody[0];
        }

        const rest = shader.replace(main[0], '');
        const defines = rest.match(/#(.*?;)/g) || [];
        const header = defines.reduce((prev, curr) => prev.replace(curr, ''), rest);
        parsedShader.header = header;
        parsedShader.defines = defines.join('\n');
      }

      return parsedShader;
    }

  }

  const replaceAll = (str, find, rep) => str.split(find).join(rep);

  function getUniform(value) {
    if (typeof value === 'string') {
      return new THREE$1.Color(value);
    }

    return value;
  }
  function getSpecialParameters(label) {
    switch (label) {
      case 'alpha':
        return {
          min: 0,
          max: 1
        };

      case 'scale':
        return {
          min: 0
        };

      case 'map':
        return {
          image: undefined
        };

      default:
        return {};
    }
  }
  function isSerializableType(prop) {
    return prop instanceof THREE$1.Vector3 || prop instanceof THREE$1.Vector2 || prop instanceof THREE$1.Vector4 || prop instanceof THREE$1.Matrix3 || prop instanceof THREE$1.Matrix4;
  }
  function serializeProp(prop) {
    if (isSerializableType(prop)) {
      return prop.toArray();
    } else if (prop instanceof THREE$1.Color) {
      return '#' + prop.clone().convertLinearToSRGB().getHexString();
    } else if (prop instanceof THREE$1.Texture) {
      return prop.image.src;
    }

    return prop;
  }

  const BlendModes = {
    normal: 'normal',
    add: 'add',
    subtract: 'subtract',
    multiply: 'multiply',
    lighten: 'lighten',
    darken: 'darken',
    divide: 'divide',
    overlay: 'overlay',
    screen: 'screen',
    softlight: 'softlight',
    negation: 'negation',
    reflect: 'reflect'
  };
  const NoiseTypes = {
    perlin: 'perlin',
    simplex: 'simplex',
    cell: 'cell',
    curl: 'curl',
    white: 'white'
  };
  const MappingTypes = {
    local: 'local',
    world: 'world',
    uv: 'uv'
  };
  const ShadingTypes = {
    phong: THREE__namespace.MeshPhongMaterial,
    physical: THREE__namespace.MeshPhysicalMaterial,
    toon: THREE__namespace.MeshToonMaterial,
    basic: THREE__namespace.MeshBasicMaterial,
    lambert: THREE__namespace.MeshLambertMaterial,
    standard: THREE__namespace.MeshStandardMaterial
  };

  class Abstract {
    constructor(c, props, onParse) {
      this.uuid = THREE$1.MathUtils.generateUUID().replace(/-/g, '_');
      this.name = 'LayerMaterial';
      this.mode = 'normal';
      this.visible = true;
      const defaults = Object.getOwnPropertyNames(c).filter(e => e.startsWith('u_'));
      const uniforms = defaults.reduce((a, v) => {
        var _Object$getOwnPropert;

        let value = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(c, v)) == null ? void 0 : _Object$getOwnPropert.value;
        if (isSerializableType(value) || value instanceof THREE$1.Color) value = value.clone();
        return { ...a,
          [v.slice(1)]: value
        };
      }, {});

      for (const key in uniforms) {
        const propName = key.split('_')[1];
        if ((props == null ? void 0 : props[propName]) !== undefined) uniforms[key] = props[propName];
      }

      if (props) {
        Object.keys(props).map(key => {
          if (props[key] !== undefined) {
            // @ts-ignore
            this[key] = props[key];
          }
        });
      }

      this.uniforms = {};
      this.schema = [];
      const properties = {};
      Object.keys(uniforms).map(key => {
        const propName = key.split('_')[1];
        this.uniforms[`u_${this.uuid}_${propName}`] = {
          value: getUniform(uniforms[key])
        };
        this.schema.push({
          value: uniforms[key],
          label: propName
        });
        properties[propName] = {
          set: v => {
            this.uniforms[`u_${this.uuid}_${propName}`].value = getUniform(v);
          },
          get: () => {
            return this.uniforms[`u_${this.uuid}_${propName}`].value;
          }
        };
      });
      if (props != null && props.name) this.name = props.name;
      if (props != null && props.mode) this.mode = props.mode;
      if (props != null && props.visible) this.visible = props.visible;
      Object.defineProperties(this, properties);
      this.vertexShader = '';
      this.fragmentShader = '';
      this.vertexVariables = '';
      this.fragmentVariables = '';
      this.onParse = onParse;
      this.buildShaders(c); // Remove Name field from Debugger until a way to
      // rename Leva folders is found
      // this.schema.push({
      //   value: this.name,
      //   label: 'name',
      // })

      this.schema.push({
        value: this.mode,
        label: 'mode',
        options: Object.values(BlendModes)
      });
      this.schema.push({
        value: this.visible,
        label: 'visible'
      });
    }

    buildShaders(constructor) {
      var _this$onParse;

      const shaders = Object.getOwnPropertyNames(constructor).filter(e => e === 'fragmentShader' || e === 'vertexShader').reduce((a, v) => {
        var _Object$getOwnPropert2;

        return { ...a,
          [v]: (_Object$getOwnPropert2 = Object.getOwnPropertyDescriptor(constructor, v)) == null ? void 0 : _Object$getOwnPropert2.value
        };
      }, {});
      const tokens = {
        vert: string(shaders.vertexShader || ''),
        frag: string(shaders.fragmentShader || '')
      };
      const descoped = {
        vert: glslTokenDescope_1(tokens.vert, this.renameTokens.bind(this)),
        frag: glslTokenDescope_1(tokens.frag, this.renameTokens.bind(this))
      };
      const funcs = {
        vert: glslTokenFunctions(descoped.vert),
        frag: glslTokenFunctions(descoped.frag)
      };
      const mainIndex = {
        vert: funcs.vert.map(e => {
          return e.name;
        }).indexOf('main'),
        frag: funcs.frag.map(e => {
          return e.name;
        }).indexOf('main')
      };
      const variables = {
        vert: mainIndex.vert >= 0 ? glslTokenString(descoped.vert.slice(0, funcs.vert[mainIndex.vert].outer[0])) : '',
        frag: mainIndex.frag >= 0 ? glslTokenString(descoped.frag.slice(0, funcs.frag[mainIndex.frag].outer[0])) : ''
      };
      const funcBodies = {
        vert: mainIndex.vert >= 0 ? this.getShaderFromIndex(descoped.vert, funcs.vert[mainIndex.vert].body) : '',
        frag: mainIndex.frag >= 0 ? this.getShaderFromIndex(descoped.frag, funcs.frag[mainIndex.frag].body) : ''
      };
      this.vertexShader = this.processFinal(funcBodies.vert, true);
      this.fragmentShader = this.processFinal(funcBodies.frag);
      this.vertexVariables = variables.vert;
      this.fragmentVariables = variables.frag;
      (_this$onParse = this.onParse) == null ? void 0 : _this$onParse.call(this, this);
      this.schema = this.schema.filter((value, index) => {
        const _value = value.label;
        return index === this.schema.findIndex(obj => {
          return obj.label === _value;
        });
      });
    }

    renameTokens(name) {
      if (name.startsWith('u_')) {
        const slice = name.slice(2);
        return `u_${this.uuid}_${slice}`;
      } else if (name.startsWith('v_')) {
        const slice = name.slice(2);
        return `v_${this.uuid}_${slice}`;
      } else if (name.startsWith('f_')) {
        const slice = name.slice(2);
        return `f_${this.uuid}_${slice}`;
      } else {
        return name;
      }
    }

    processFinal(shader, isVertex) {
      const s = shader.replace(/\sf_/gm, ` f_${this.uuid}_`).replace(/\(f_/gm, `(f_${this.uuid}_`);
      const returnValue = s.match(/^.*return.*$/gm);
      let sReplaced = s.replace(/^.*return.*$/gm, '');

      if (returnValue != null && returnValue[0]) {
        const returnVariable = returnValue[0].replace('return', '').trim().replace(';', '');
        const blendMode = this.getBlendMode(returnVariable, 'lamina_finalColor');
        sReplaced += isVertex ? `lamina_finalPosition = ${returnVariable};` : `lamina_finalColor = ${blendMode};`;
      }

      return sReplaced;
    }

    getShaderFromIndex(tokens, index) {
      return glslTokenString(tokens.slice(index[0], index[1]));
    }

    getBlendMode(b, a) {
      switch (this.mode) {
        default:
        case 'normal':
          return `lamina_blend_alpha(${a}, ${b}, ${b}.a)`;

        case 'add':
          return `lamina_blend_add(${a}, ${b}, ${b}.a)`;

        case 'subtract':
          return `lamina_blend_subtract(${a}, ${b}, ${b}.a)`;

        case 'multiply':
          return `lamina_blend_multiply(${a}, ${b}, ${b}.a)`;

        case 'lighten':
          return `lamina_blend_lighten(${a}, ${b}, ${b}.a)`;

        case 'darken':
          return `lamina_blend_darken(${a}, ${b}, ${b}.a)`;

        case 'divide':
          return `lamina_blend_divide(${a}, ${b}, ${b}.a)`;

        case 'overlay':
          return `lamina_blend_overlay(${a}, ${b}, ${b}.a)`;

        case 'screen':
          return `lamina_blend_screen(${a}, ${b}, ${b}.a)`;

        case 'softlight':
          return `lamina_blend_softlight(${a}, ${b}, ${b}.a)`;

        case 'reflect':
          return `lamina_blend_reflect(${a}, ${b}, ${b}.a)`;

        case 'negation':
          return `lamina_blend_negation(${a}, ${b}, ${b}.a)`;
      }
    }

    getSchema() {
      const latestSchema = this.schema.map(({
        label,
        options,
        ...rest
      }) => {
        return {
          label,
          options,
          ...getSpecialParameters(label),
          ...rest,
          // @ts-ignore
          value: serializeProp(this[label])
        };
      });
      return latestSchema;
    }

    serialize() {
      const name = this.constructor.name.split('$')[0];
      let nonUniformPropKeys = Object.keys(this);
      nonUniformPropKeys = nonUniformPropKeys.filter(e => !['uuid', 'uniforms', 'schema', 'fragmentShader', 'vertexShader', 'fragmentVariables', 'vertexVariables', 'attribs', 'events', '__r3f', 'onParse'].includes(e));
      const nonUniformProps = {};
      nonUniformPropKeys.forEach(k => {
        // @ts-ignore
        nonUniformProps[k] = this[k];
      });
      const props = {};

      for (const key in this.uniforms) {
        const name = key.replace(`u_${this.uuid}_`, '');
        props[name] = serializeProp(this.uniforms[key].value);
      }

      return {
        constructor: name,
        properties: { ...props,
          ...nonUniformProps
        }
      };
    }

  }

  class Depth extends Abstract {
    constructor(props) {
      super(Depth, {
        name: 'Depth',
        ...props
      }, self => {
        self.schema.push({
          value: self.mapping,
          label: 'mapping',
          options: ['vector', 'world', 'camera']
        });
        const mapping = Depth.getMapping(self.uuid, self.mapping);
        self.fragmentShader = self.fragmentShader.replace('lamina_mapping_template', mapping);
      });
      this.mapping = 'vector';
    }

    static getMapping(uuid, type) {
      switch (type) {
        default:
        case 'vector':
          return `length(v_${uuid}_worldPosition - u_${uuid}_origin)`;

        case 'world':
          return `length(v_${uuid}_position - vec3(0.))`;

        case 'camera':
          return `length(v_${uuid}_worldPosition - cameraPosition)`;
      }
    }

  }
  Depth.u_near = 2;
  Depth.u_far = 10;
  Depth.u_origin = new THREE$1.Vector3(0, 0, 0);
  Depth.u_colorA = 'white';
  Depth.u_colorB = 'black';
  Depth.u_alpha = 1;
  Depth.vertexShader = `
  varying vec3 v_worldPosition;
  varying vec3 v_position;

  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `;
  Depth.fragmentShader = `   
    uniform float u_alpha;
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist = lamina_mapping_template;
      float f_depth = (f_dist - u_near) / (u_far - u_near);
			vec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));
  
  
      return vec4(f_depthColor, u_alpha);
    }
  `;

  class Color extends Abstract {
    constructor(props) {
      super(Color, {
        name: 'Color',
        ...props
      });
    }

  }
  Color.u_color = 'red';
  Color.u_alpha = 1;
  Color.fragmentShader = `   
    uniform vec3 u_color;
    uniform float u_alpha;

    void main() {
      return vec4(u_color, u_alpha);
    }
  `;

  class Noise extends Abstract {
    constructor(props) {
      super(Noise, {
        name: 'noise',
        ...props
      }, self => {
        self.schema.push({
          value: self.type,
          label: 'type',
          options: Object.values(NoiseTypes)
        });
        self.schema.push({
          value: self.mapping,
          label: 'mapping',
          options: Object.values(MappingTypes)
        });
        const noiseFunc = Noise.getNoiseFunction(self.type);
        const mapping = Noise.getMapping(self.mapping);
        self.vertexShader = self.vertexShader.replace('lamina_mapping_template', mapping);
        self.fragmentShader = self.fragmentShader.replace('lamina_noise_template', noiseFunc);
      });
      this.type = 'perlin';
      this.mapping = 'local';
    }

    static getNoiseFunction(type) {
      switch (type) {
        default:
        case 'perlin':
          return `lamina_noise_perlin`;

        case 'simplex':
          return `lamina_noise_simplex`;

        case 'cell':
          return `lamina_noise_worley`;

        case 'white':
          return `lamina_noise_white`;

        case 'curl':
          return `lamina_noise_swirl`;
      }
    }

    static getMapping(type) {
      switch (type) {
        default:
        case 'local':
          return `position`;

        case 'world':
          return `(modelMatrix * vec4(position,1.0)).xyz`;

        case 'uv':
          return `vec3(uv, 0.)`;
      }
    }

  }
  Noise.u_colorA = '#666666';
  Noise.u_colorB = '#666666';
  Noise.u_colorC = '#FFFFFF';
  Noise.u_colorD = '#FFFFFF';
  Noise.u_alpha = 1;
  Noise.u_scale = 1;
  Noise.u_offset = new THREE$1.Vector3(0, 0, 0);
  Noise.vertexShader = `
    varying vec3 v_position;

    void main() {
        v_position = lamina_mapping_template;
    }
  `;
  Noise.fragmentShader = `   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_offset;

    uniform float u_alpha;
    uniform float u_scale;

    varying vec3 v_position;


    void main() {
        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);

        float f_step1 = 0.;
        float f_step2 = 0.2;
        float f_step3 = 0.6;
        float f_step4 = 1.;

        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));
        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));
        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));

        return vec4(f_color, u_alpha);
    }
  `;

  class Fresnel extends Abstract {
    constructor(props) {
      super(Fresnel, {
        name: 'Fresnel',
        ...props
      });
    }

  }
  Fresnel.u_color = 'white';
  Fresnel.u_alpha = 1;
  Fresnel.u_bias = 0;
  Fresnel.u_intensity = 1;
  Fresnel.u_power = 2;
  Fresnel.u_factor = 1;
  Fresnel.vertexShader = `
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);
        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
    }
  `;
  Fresnel.fragmentShader = `   
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_bias;
    uniform float u_intensity;
    uniform float u_power;
    uniform float u_factor;

    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));
        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);

        f_fresnel = clamp(f_fresnel, 0.0, 1.0);
        return vec4(f_fresnel * u_color, u_alpha);
    }
  `;

  class Gradient extends Abstract {
    constructor(props) {
      super(Gradient, {
        name: 'Gradient',
        ...props
      }, self => {
        self.schema.push({
          value: self.axes,
          label: 'axes',
          options: ['x', 'y', 'z']
        });
        self.schema.push({
          value: self.mapping,
          label: 'mapping',
          options: Object.values(MappingTypes)
        });
        const mapping = Gradient.getMapping(self.mapping);
        self.vertexShader = self.vertexShader.replace('lamina_mapping_template', mapping || 'local');
        self.fragmentShader = self.fragmentShader.replace('axes_template', self.axes || 'x');
      });
      this.axes = 'x';
      this.mapping = 'local';
    }

    static getMapping(type) {
      switch (type) {
        default:
        case 'local':
          return `position`;

        case 'world':
          return `(modelMatrix * vec4(position,1.0)).xyz`;

        case 'uv':
          return `vec3(uv, 0.)`;
      }
    }

  }
  Gradient.u_colorA = 'white';
  Gradient.u_colorB = 'black';
  Gradient.u_alpha = 1;
  Gradient.u_start = 1;
  Gradient.u_end = -1;
  Gradient.u_contrast = 1;
  Gradient.vertexShader = `
		varying vec3 v_position;

		vod main() {
      v_position = lamina_mapping_template;
		}
  `;
  Gradient.fragmentShader = `   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_axis;
    uniform float u_alpha;
    uniform float u_start;
    uniform float u_end;
    uniform float u_contrast;

		varying vec3 v_position;

    void main() {

      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);
      vec3 f_color = mix(u_colorA, u_colorB, f_step);

      return vec4(f_color, u_alpha);
    }
  `;

  class Matcap extends Abstract {
    constructor(props) {
      super(Matcap, {
        name: "Matcap",
        ...props
      });
    }

  }
  Matcap.u_alpha = 1;
  Matcap.u_map = undefined;
  Matcap.vertexShader = `
    varying vec3 v_position;
    varying vec3 v_normal;
    
    void main() {
      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
      v_normal = normalize( normalMatrix * normal );
    }
    `;
  Matcap.fragmentShader = ` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec3 v_position;
		varying vec3 v_normal;

		
    void main() {
			vec3 f_r = reflect( v_position, v_normal );
			float f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );
			vec2 f_vN = f_r.xy / f_m + .5;

			vec3 f_base = texture2D(u_map, f_vN).rgb;

      return vec4(f_base, u_alpha);
    }
  `;

  class Texture extends Abstract {
    constructor(props) {
      super(Texture, {
        name: 'Texture',
        ...props
      });
    }

  }
  Texture.u_alpha = 1;
  Texture.u_map = undefined;
  Texture.vertexShader = `
    varying vec2 v_uv;
    
    void main() {
        v_uv = uv;
    }
    `;
  Texture.fragmentShader = ` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec2 v_uv;

    void main() {
			vec3 f_color = texture2D(u_map, v_uv).rgb;
      return vec4(f_color, u_alpha);
    }
  `;

  class Displace extends Abstract {
    constructor(props) {
      super(Displace, {
        name: 'Displace',
        ...props
      }, self => {
        self.schema.push({
          value: self.type,
          label: 'type',
          options: Object.values(NoiseTypes)
        });
        self.schema.push({
          value: self.mapping,
          label: 'mapping',
          options: Object.values(MappingTypes)
        });
        const noiseFunc = Displace.getNoiseFunction(self.type);
        const mapping = Displace.getMapping(self.mapping);
        self.vertexVariables = self.vertexVariables.replace('lamina_mapping_template', mapping);
        self.vertexVariables = self.vertexVariables.replace('lamina_noise_template', noiseFunc);
      });
      this.type = 'perlin';
      this.mapping = 'local';
    }

    static getNoiseFunction(type) {
      switch (type) {
        default:
        case 'perlin':
          return `lamina_noise_perlin`;

        case 'simplex':
          return `lamina_noise_simplex`;

        case 'cell':
          return `lamina_noise_worley`;

        case 'white':
          return `lamina_noise_white`;

        case 'curl':
          return `lamina_noise_swirl`;
      }
    }

    static getMapping(type) {
      switch (type) {
        default:
        case 'local':
          return `p`;

        case 'world':
          return `(modelMatrix * vec4(p,1.0)).xyz`;

        case 'uv':
          return `vec3(uv, 0.)`;
      }
    }

  }
  Displace.u_strength = 1;
  Displace.u_scale = 1;
  Displace.u_offset = new THREE$1.Vector3(0, 0, 0);
  Displace.vertexShader = `
       
      uniform float u_strength;
      uniform float u_scale;
      uniform vec3 u_offset;

      vec3 displace(vec3 p) {
				vec3 f_position = lamina_mapping_template;
        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;
        vec3 f_newPosition = p + (f_n * normal);

				return f_newPosition;
      }

      
			vec3 orthogonal(vec3 v) {
  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  		  : vec3(0.0, -v.z, v.y));
  		}
  		vec3 recalcNormals(vec3 newPos) {
  		  float offset = 0.001;
  		  vec3 tangent = orthogonal(normal);
  		  vec3 bitangent = normalize(cross(normal, tangent));
  		  vec3 neighbour1 = position + tangent * offset;
  		  vec3 neighbour2 = position + bitangent * offset;
  		  vec3 displacedNeighbour1 = displace(neighbour1);
  		  vec3 displacedNeighbour2 = displace(neighbour2);
  		  vec3 displacedTangent = displacedNeighbour1 - newPos;
  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;
  		  return normalize(cross(displacedTangent, displacedBitangent));
  		}
  
  
      void main() {
       
				vec3 f_newPosition = displace(position);
        lamina_finalNormal = recalcNormals(f_newPosition);

        return f_newPosition;
      }
    `;

  class Normal extends Abstract {
    constructor(props) {
      super(Normal, {
        name: 'Normal',
        ...props
      });
    }

  }
  Normal.u_alpha = 1;
  Normal.u_direction = new THREE$1.Vector3(1, 1, 1);
  Normal.vertexShader = `   
  varying vec3 v_normals; 

  void main() {
    v_normals = normal;
  }
`;
  Normal.fragmentShader = `   
  	uniform float u_alpha;
  	uniform vec3 u_color;
  	uniform vec3 u_direction;

		varying vec3 v_normals;

    void main() {
			vec3 f_normalColor = vec3(1.);
      f_normalColor.x = v_normals.x * u_direction.x;
      f_normalColor.y = v_normals.y * u_direction.y;
      f_normalColor.z = v_normals.z * u_direction.z;

      return vec4(f_normalColor, u_alpha);
    }
  `;

  var BlendModesChunk = /* glsl */
`
vec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
vec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), max(x.a, a));

}
vec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
float lamina_blend_color_burn(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_burn(x.r, y.r),
		lamina_blend_color_burn(x.g, y.g),
		lamina_blend_color_burn(x.b, y.b),
		lamina_blend_color_burn(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
float lamina_blend_color_dodge(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_dodge(x.r, y.r),
		lamina_blend_color_dodge(x.g, y.g),
		lamina_blend_color_dodge(x.b, y.b),
		lamina_blend_color_dodge(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
float lamina_blend_divide(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_divide(x.r, y.r),
		lamina_blend_divide(x.g, y.g),
		lamina_blend_divide(x.b, y.b),
		lamina_blend_divide(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
float lamina_blend_overlay(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_overlay(x.r, y.r),
		lamina_blend_overlay(x.g, y.g),
		lamina_blend_overlay(x.b, y.b),
		lamina_blend_overlay(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
float lamina_blend_reflect(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_reflect(x.r, y.r),
		lamina_blend_reflect(x.g, y.g),
		lamina_blend_reflect(x.b, y.b),
		lamina_blend_reflect(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
float lamina_blend_softlight(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_softlight(x.r, y.r),
		lamina_blend_softlight(x.g, y.g),
		lamina_blend_softlight(x.b, y.b),
		lamina_blend_softlight(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
vec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}

`  ;

  var NoiseChunk = /* glsl */
`

// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Huge thanks to the creators of these algorithms

float lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}
vec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }


float lamina_noise_white(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *
               (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

float lamina_noise_white(vec3 p) {
  return lamina_noise_white(p.xy);
}


vec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float lamina_noise_perlin(vec3 P) {
  vec3 Pi0 = floor(P);        // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);
  vec4 ixy0 = lamina_noise_permute(ixy + iz0);
  vec4 ixy1 = lamina_noise_permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = lamina_noise_taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = lamina_noise_taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = lamina_noise_fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return lamina_normalize(2.2 * n_xyz);
}

float lamina_noise_simplex(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +
                             vec4(0.0, i1.y, i2.y, 1.0)) +
                    i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm =
      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m =
      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return lamina_normalize(42.0 *
         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}

vec3 lamina_noise_simplex3(vec3 x) {
  float s = lamina_noise_simplex(vec3(x));
  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  vec3 c = vec3(s, s1, s2);
  return c;
}

vec3 lamina_noise_curl(vec3 p) {
  const float e = .1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = lamina_noise_simplex3(p - dx);
  vec3 p_x1 = lamina_noise_simplex3(p + dx);
  vec3 p_y0 = lamina_noise_simplex3(p - dy);
  vec3 p_y1 = lamina_noise_simplex3(p + dy);
  vec3 p_z0 = lamina_noise_simplex3(p - dz);
  vec3 p_z1 = lamina_noise_simplex3(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}

vec3 lamina_permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);
}

// From: https://github.com/Erkaman/glsl-worley
float lamina_noise_worley(vec3 P) {
  float jitter = 1.;
  bool manhattanDistance = false; 

  float K = 0.142857142857; // 1/7
  float Ko = 0.428571428571; // 1/2-K/2
  float  K2 = 0.020408163265306; // 1/(7*7)
  float Kz = 0.166666666667; // 1/6
  float Kzo = 0.416666666667; // 1/2-1/6*2

	vec3 Pi = mod(floor(P), 289.0);
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = lamina_permute(p + Pi.y - 1.0);
	vec3 p2 = lamina_permute(p + Pi.y);
	vec3 p3 = lamina_permute(p + Pi.y + 1.0);

	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);
	vec3 p12 = lamina_permute(p1 + Pi.z);
	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);

	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);
	vec3 p22 = lamina_permute(p2 + Pi.z);
	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);

	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);
	vec3 p32 = lamina_permute(p3 + Pi.z);
	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);
	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);
	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);
	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);
	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);
	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);
	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);
	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);
	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);

	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)

  vec2 F = sqrt(d11.xy);
	return F.x; // F1, F2

}

float lamina_noise_swirl(vec3 position) {
    float scale = 0.1;
    float freq = 4. * scale;
    float t = 1.;

    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);

    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));
    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));
    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));
    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));
    
    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;
    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;
    float fbm3 = worley3 * .75 + worley4 * .25;

    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);
    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + 
        curlWorleyFbm.b * .125;

    return curlWorley;
}
  
  
`  ;

  var HelpersChunk = /* glsl */
`

float lamina_map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }
`  ;

  class LayerMaterial extends CustomShaderMaterial {
    constructor({
      color,
      alpha,
      lighting,
      layers,
      name,
      ...props
    } = {}) {
      super(ShadingTypes[lighting || 'basic'], undefined, undefined, undefined, props);
      this.name = 'LayerMaterial';
      this.layers = [];
      this.baseColor = 'white';
      this.alpha = 1;
      this.lighting = 'basic';
      this.baseColor = color || this.baseColor;
      this.alpha = alpha != null ? alpha : this.alpha;
      this.layers = layers || this.layers;
      this.lighting = lighting || this.lighting;
      this.name = name || this.name;
      this.refresh();
    }

    genShaders() {
      let vertexVariables = '';
      let fragmentVariables = '';
      let vertexShader = '';
      let fragmentShader = '';
      let uniforms = {};
      this.layers.filter(l => l.visible).forEach(l => {
        // l.buildShaders(l.constructor)
        vertexVariables += l.vertexVariables + '\n';
        fragmentVariables += l.fragmentVariables + '\n';
        vertexShader += l.vertexShader + '\n';
        fragmentShader += l.fragmentShader + '\n';
        uniforms = { ...uniforms,
          ...l.uniforms
        };
      });
      uniforms = { ...uniforms,
        ...{
          u_lamina_color: {
            value: typeof this.baseColor === 'string' ? new THREE__namespace.Color(this.baseColor).convertSRGBToLinear() : this.baseColor
          },
          u_lamina_alpha: {
            value: this.alpha
          }
        }
      };
      this.transparent = Boolean(this.alpha !== undefined && this.alpha < 1);
      return {
        uniforms,
        vertexShader: `
        ${HelpersChunk}
        ${NoiseChunk}
        ${vertexVariables}

        void main() {
          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;

          ${vertexShader}

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,
        fragmentShader: `
        ${HelpersChunk}
        ${NoiseChunk}
        ${BlendModesChunk}
        ${fragmentVariables}

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;

        void main() {
          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);

          ${fragmentShader}

          csm_DiffuseColor = lamina_finalColor;
         
        }
        `
      };
    }

    refresh() {
      const {
        uniforms,
        fragmentShader,
        vertexShader
      } = this.genShaders();
      super.update(fragmentShader, vertexShader, uniforms);
    }

    serialize() {
      return {
        constructor: 'LayerMaterial',
        properties: {
          color: this.baseColor,
          alpha: this.alpha,
          name: this.name,
          lighting: this.lighting
        }
      };
    }

  }

  var lamina = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abstract: Abstract,
    Color: Color,
    Depth: Depth,
    Displace: Displace,
    Fresnel: Fresnel,
    Gradient: Gradient,
    LayerMaterial: LayerMaterial,
    Matcap: Matcap,
    Noise: Noise,
    Normal: Normal,
    Texture: Texture
  });

  /* jshint esversion: 9 */

  AFRAME.registerShader('lamina', {
  	schema: {
  		layers: {
  			type: 'selector',
  			description: 'Element that contains the layers, defautls to this element.'
  		},
  		color: {
  			type: 'color',
  			default: 'white',
  			description: 'Base color'
  		},
  		alpha: {
  			default: 1,
  			description: 'Alpha'
  		},
  		lighting: {
  			oneOf: ['phong', 'physical', 'toon', 'basic', 'lambert', 'standard'],
  			default: 'basic',
  			description: 'Shading model to use.'
  		}
  	},

  	init: function (data) {
  		const layers = data.layers || this.el;
  		this.rendererSystem = this.el.sceneEl.systems.renderer;
  		this.material = new LayerMaterial({
  			color: new THREE.Color(data.color).convertSRGBToLinear(),
  			layers: Array.from(layers.children).map(el => el.laminaLayer),
  			lighting: data.lighting
  		});
  	},

  	update: function (data) {
  		this.material.color.set(data.color);
  		this.material.alpha = data.alpha;
  		this.material.lighting = data.lighting;
  		this.material.layers.splice(0);
  		this.material.needsUpdate = true;
  	}
  });

  const defaultSchema = {
  	mode: {
  		default: 'normal',
  		oneOf: [
  			'normal',
  			'divide',
  			'add',
  			'overlay',
  			'subtract',
  			'screen',
  			'multiply',
  			'softlight',
  			'lighten',
  			'reflect',
  			'darken',
  			'negation'
  		]
  		// blend mode
  	},
  	visible: {
  		default: true
  	}
  };

  const schemas = {};
  for (const layer of [
  	'Color',
  	'Depth',
  	'Fresnel',
  	'Gradient',
  	'Matcap',
  	'Noise',
  	'Normal',
  	'Texture',
  	'Displace'
  ]) {
  	const schemaIn = new lamina[layer]().schema;
  	const schema = {};
  	for (const schemumIn of schemaIn) {
  		const schemum = Object.assign({}, schemumIn);
  		if (!schemum.value && schemum.options) schemum.value = schemum.options[0];
  		let type = typeof schemum.value;
  		if (type === "object") {
  			type = schemum.value.constructor.name;
  			if (type === "Vector3") type = "vec3";
  			if (type === "Vector2") type = "vec1";
  			if (type === "Matrix4") type = "mat4";
  		}
  		if (schemum.label.startsWith('color')) {
  			type = 'color';
  		}
  		if (schemum.label.endsWith('Map') || schemum.label.endsWith('map')) {
  			type = 'map';
  		}
  		const out = { type };
  		if (schemum.value) out.default = schemum.value;
  		if (schemum.options) out.oneOf = schemum.options;
  		schema[schemum.label] = out;
  	}
  	schemas[layer] = schema;
  }

  for (const [name, schemapart] of Object.entries(schemas)) {
  	const schema = Object.assign(Object.assign({}, defaultSchema), schemapart);
  	AFRAME.registerComponent('lamina-' + name.toLowerCase(), {
  		schema,
  		init() {
  			const config = {};
  			for (const [prop, value] of Object.entries(this.data)) {
  				let parsedVal = value;
  				if (schema[prop].type === 'color') {
  					parsedVal = new THREE.Color(value).convertSRGBToLinear();
  				}
  				config[prop] = parsedVal;
  			}
  			const layer = new lamina[name](config);
  			this.el.laminaLayer = layer;
  		},
  		update(oldData) {
  		}
  	});
  }

  AFRAME.registerPrimitive('a-lamina', {
  	mappings: {
  		color: "material.color",
  		alpha: "material.alpha",
  		lighting: "material.lighting",
  	},
  	defaultComponents: {
  		material: "shader:lamina;"
  	}
  });

})(THREE);
//# sourceMappingURL=aframe-lamina.js.map
