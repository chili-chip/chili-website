---
title: "Graphics"
date: 2025-12-16
lastmod: 2025-12-16
draft: false
description: "Learn about the graphics capabilities and API of the Game SDK for VGC Zero."
tags: ["sdk", "api", "graphics", "vgc-zero", "development"]
---

This section covers the graphics capabilities and API of the Game SDK for VGC Zero. It includes information on drawing techniques, sprite handling, tilemaps, and other graphical features available to developers.

## Drawing basics
The Game SDK provides a variety of functions for drawing shapes, images, and text to the `screen`.

The `screen` is an instance of a `Surface` class, stored in a global variable - which means you can access it directly from anywhere in your code.

The `Surface` class represents a 2D drawing surface, and provides methods for rendering graphics.

The `Pen` class represents a color, which can be created using RGB values or predefined colors.

Below are listed all the drawing functions available in the SDK. You can call those methods on any `Surface` instance. 

### Clearing the screen
To clear the screen, you can use the `clear()` method.
```cpp
void render(uint32_t time) {
    screen.clear(); // Clear the screen
    // Render game graphics
}
```

### Drawing shapes
You can draw various shapes using the following methods:
- `pixel(int x, int y, blit::Pen color)`: Draw a single pixel at (x, y) with the specified color.
    ```cpp
    void render(uint32_t time) {
    screen.clear(); // Clear the screen
    screen.pixel(10, 10, blit::Pen(255, 0, 0)); // Draw a red pixel at coordinates (10, 10)
    }
    ```

- `void blit::Surface::rectangle(int x, int y, int width, int height, blit::Pen color)`: Draw a filled rectangle.
    ```cpp
    void render(uint32_t time) {
        screen.clear(); // Clear the screen
        screen.rectangle(20, 20, 50, 30, blit::Pen(0, 255, 0)); // Draw a green rectangle
    }
    ```