# 📱 Aplicación React Native: Calculadora e Infografías

Este proyecto es una aplicación móvil desarrollada con **React Native**, **TypeScript** y **Expo**, que contiene dos funcionalidades principales:

- 🔢 **Calculadora básica** (suma, resta, multiplicación y división).
- 🖼️ **Infografías** (tarjetas visuales con enlaces informativos).

---

## 📂 Estructura General del Proyecto

La estructura del proyecto sigue una organización limpia y modular. Todos los archivos fuente están contenidos dentro del directorio `src`:

parcial/
├── assets/ # Imágenes usadas en infografías
├── src/
│ ├── context/
│ │ └── AppContext.tsx # Implementación del Context API
│ ├── navigation/
│ │ └── AppNavigator.tsx # Configuración de navegación entre pantallas
│ └── screens/
│ ├── calculadora.tsx # Pantalla de calculadora
│ └── infografia.tsx # Pantalla de infografías con enlaces
├── App.tsx # Punto de entrada de la app
├── app.json # Configuración de Expo
├── index.ts # Entrada para plataformas (web/native)
├── tsconfig.json # Configuración de TypeScript
├── package.json # Dependencias del proyecto
└── README.md # Este archivo

markdown
Copiar
Editar

---

## 🔄 Navegación entre Pantallas

La navegación se implementa utilizando `React Navigation` con un **Stack Navigator**, definido en `AppNavigator.tsx`.

- El `AppNavigator.tsx` contiene dos pantallas:
  - `calculadora.tsx` → Interfaz completa de calculadora.
  - `infografia.tsx` → Vista de tarjetas informativas.

La navegación permite cambiar de pantalla a través del encabezado superior (`header`) que se habilita en ambas vistas. No se usa navegación tipo drawer o tabs.

---

## 🧮 Funcionalidad de la Calculadora

La calculadora básica permite las operaciones:

- **➕ Suma**
- **➖ Resta**
- **✖️ Multiplicación**
- **➗ División**

### Funcionalidad:

- Los botones son renderizados dinámicamente.
- Los dígitos y operadores son agregados al estado `input`.
- Al presionar el botón `=`, se evalúa la expresión con la función `eval`.
- El botón `C` limpia el estado completamente.

El archivo `calculadora.tsx` maneja el estado mediante `useState` y contiene estilos con `StyleSheet.create`.

---

## 🖼️ Funcionalidad de las Tarjetas Informativas

La pantalla `infografia.tsx` muestra tarjetas que incluyen:

- **Título:** Descripción del contenido (por ejemplo, "Formula 1").
- **Imagen:** Cargada desde la carpeta `/assets`.
- **Botón "Visitar":** Abre un enlace externo en el navegador del dispositivo.

Las tarjetas se generan desde un arreglo estático local usando `FlatList`, lo que mejora el rendimiento si se agregan más ítems.

Se utiliza el módulo `Linking` de React Native para abrir las URLs al presionar el botón.

---

## 🌐 Uso del Context API

Se implementa el Context API mediante `AppContext.tsx` para compartir **el estado global del tema visual** (modo claro u oscuro).

### Detalles:

- `AppContext.tsx` define el contexto `AppContext`.
- El contexto incluye:
  - `theme` (claro u oscuro)
  - `toggleTheme()` para cambiarlo dinámicamente.
- En `App.tsx` se utiliza el `AppProvider` para envolver toda la aplicación.

Desde cualquier pantalla, se puede acceder al contexto usando:

```tsx
const { theme, toggleTheme } = useContext(AppContext);