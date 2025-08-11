## Guía de Marca — Plenu

### Propósito, personalidad y tono

- **Propósito**: Acompañar hábitos saludables con guía amable, clara y accionable.
- **Personalidad**: cercana, positiva, precisa, sin alarmismo.
- **Tono**: motivacional y práctico; evita tecnicismos innecesarios.

### Identidad visual

- **Logotipo**
  - Usar el archivo original en `assets/logo_plenu.png` sobre fondos blancos o muy claros.
  - Espacio de seguridad: mínimo el alto de la “P” del logotipo alrededor.
  - Tamaños mínimos recomendados:
    - Web: 24 px de alto (header), 48–72 px (hero/landing).
    - Social: 128 px (mínimo dentro de composiciones).
  - No distorsionar, no aplicar sombras, no cambiar colores.

- **Iconografía**
  - Biblioteca: Ionicons.
  - Estilo: outline (coherente con el uso de `WebCompatibleIcon`).
  - Consistencia: usar siempre los mismos pictogramas por concepto:
    - Recomendado: `sparkles-outline`
    - Comidas / menú: `restaurant-outline`
    - Nutrición / tips: `nutrition-outline`

### Paleta de colores (tokens)

Usar estos tokens en todos los proyectos (app/web/landing) para consistencia. Basado en `src/styles/colors.ts`.

- **Base**
  - `primary`: #378560 (acciones principales, énfasis)
  - `primaryLight`: #4A9B73
  - `primaryDark`: #2A6B4D
  - `primarySoft`: #E8F3ED (fondos suaves)
  - `secondary`: #10B981
  - `secondaryLight`: #34D399
  - `secondaryDark`: #059669
  - `secondarySoft`: #D1FAE5

- **Neutros**
  - `background`: #FFFFFF
  - `backgroundSecondary`: #FAFAFA
  - `backgroundTertiary`: #F5F5F5
  - `textPrimary`: #1F2937
  - `textSecondary`: #6B7280
  - `textTertiary`: #9CA3AF
  - `border`: #E5E7EB

- **Estados**
  - `success`: #378560
  - `warning`: #F59E0B
  - `error`: #EF4444
  - `info`: #3B82F6

- **Acento**
  - `accent`: #8B5CF6
  - `accentLight`: #A78BFA
  - `accentSoft`: #EDE9FE

- **Notas de impresión**
  - No hay equivalentes Pantone exactos; solicitar prueba de color a partir de HEX.
  - CMYK aproximado para `primary` (orientativo): C59 M0 Y28 K48. Validar con el impresor.

### Tipografía

- **Primaria**: Inter
  - Pesos: 400 / 500 / 600 / 700 (alineado a `src/styles/typography.ts`).
  - Alternativas/fallbacks:
    - iOS: SF Pro Text
    - Android: Roboto
    - Web: Inter, system-ui, -apple-system, Segoe UI, Roboto

- **Jerarquía recomendada**
  - Títulos: h1 26/32 700, h2 22/28 600, h3 20/26 600, h4 18/24 600
  - Cuerpo: 15/22 400; Secundario: 15/22 400 en `textSecondary`
  - Pequeño: 13/18 400; Caption: 11/14 500 uppercase
  - Botones: 15/22 600
  - Métricas: 28/34 700 (primario), 20/26 600 (secundario)

### Espaciado, radio y sombras

- **Escala de espaciado** (de `src/styles/spacing.ts`): xxs 2, xs 4, sm 8, md 12, lg 16, xl 24, xxl 32, xxxl 48.
- **Contenedores**: `screenPadding` 20; `cardPadding` 20; `sectionSpacing` 28.
- **Bordes**: inputs/botones radio 8; cards radio 12; `full` 9999.
- **Sombras**: `elevation.low/medium/high` con opacidades suaves. Evitar sombras duras.

### Patrones de componentes (reglas rápidas)

- **Botón primario**: fondo `primary`, texto `textInverse`, radio 8, padding 16, alto mínimo 44.
- **Botón secundario**: borde `primary`, texto `primary`, fondo blanco o `primarySoft`.
- **Inputs**: fondo blanco, borde `border`, foco `borderFocus` (`primary`). Label 13/18 500 en `textSecondary`.
- **Cards**: fondo `backgroundSecondary`, radio 12, sombra `elevation.low`. Separadores `borderLight`.
- **Estados en cards**: indicar completado con borde/color sutil, sin llenar toda la tarjeta.

### Accesibilidad

- Contraste mínimo WCAG AA en texto sobre fondo.
- Objetivos táctiles ≥ 44 px de alto.
- Estados de foco visibles (borde o sombra con `borderFocus`).

### Composición para web/landing

- **Grid**: 12 columnas, gutters 24 px, container máx. 1200–1280 px.
- **Breakpoints** (sugeridos): 360, 480, 768, 1024, 1280 px.
- **Hero**: titular h1 + subtítulo body + CTA primario; usar `primarySoft` como base de sección.
- **Imágenes**: vida saludable, luz natural, verdes/claros; evitar saturación/rojos fuertes.

### Redes sociales (plantillas)

- **Tamaños**
  - Instagram post: 1080×1080
  - Instagram portrait: 1080×1350
  - Story/Reels: 1080×1920
- **Márgenes seguros**: 64 px en stories; 80 px top/bottom para no tapar UI.
- **Estilo**: base `primarySoft`, titulares `textPrimary`, acentos `primaryLight`/`accent`, iconografía outline.

### Copy y voz

- **Hacer**: mensajes cortos, positivos, accionables (p. ej. “Hoy, 1 paso más”).
- **Evitar**: alarmismo, juicios, tecnicismos sin explicación.

### Tokens reutilizables

- **CSS variables (web)**
```css
:root{
  --color-primary:#378560; --color-primary-light:#4A9B73; --color-primary-dark:#2A6B4D; --color-primary-soft:#E8F3ED;
  --color-secondary:#10B981; --color-secondary-light:#34D399; --color-secondary-dark:#059669; --color-secondary-soft:#D1FAE5;
  --color-bg:#FFFFFF; --color-bg-2:#FAFAFA; --color-bg-3:#F5F5F5;
  --text-1:#1F2937; --text-2:#6B7280; --text-3:#9CA3AF;
  --border:#E5E7EB; --border-focus:#378560; 
  --accent:#8B5CF6; --accent-light:#A78BFA; --accent-soft:#EDE9FE;
}
```

- **Tailwind (sugerencia)**
```js
// tailwind.config.js
module.exports = {
  theme:{
    extend:{
      colors:{
        primary:'#378560', 'primary-light':'#4A9B73','primary-dark':'#2A6B4D','primary-soft':'#E8F3ED',
        secondary:'#10B981','secondary-light':'#34D399','secondary-dark':'#059669','secondary-soft':'#D1FAE5',
        bg:'#FFFFFF','bg-2':'#FAFAFA','bg-3':'#F5F5F5',
        text:{ primary:'#1F2937', secondary:'#6B7280', tertiary:'#9CA3AF' },
        border:'#E5E7EB', 'border-focus':'#378560', accent:'#8B5CF6'
      },
      borderRadius:{ card:'12px', button:'8px', input:'8px' },
      boxShadow:{
        low:'0 1px 2px rgba(0,0,0,.08)',
        medium:'0 2px 4px rgba(0,0,0,.12)',
        high:'0 4px 8px rgba(0,0,0,.16)'
      },
      fontFamily:{ sans:['Inter','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'] }
    }
  }
}
```

- **React Native**
  - Reutilizar `colors`, `typography`, `spacing`, `borderRadius`, `elevation`.
  - Mantener pesos 400/500/600/700.

### Reglas de consistencia

- Usar `primary` para acciones y énfasis; reservar `accent` para highlights puntuales.
- Texto principal siempre `textPrimary` sobre fondos claros.
- Máximo 2–3 colores de acento por pieza.
- Paddings uniformes: 16–20 px en contenedores/card.

### Entregables sugeridos

- Este documento (`docs/BRAND_GUIDE.md`).
- Plantillas Figma: landing (desktop/mobile), post IG 1080×1080, story 1080×1920.
- Librería de componentes básicos: botón, input, card, badge (con variantes primaria/secundaria).


