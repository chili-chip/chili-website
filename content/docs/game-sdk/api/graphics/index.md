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

You should call all drawing functions within the `render` function, which is called once per frame.
```cpp
void render(uint32_t time) {
    // Drawing code goes here
}
```

> [!TIP]
> Use blit namespace to avoid prefixing all calls with `blit::`.
> ```cpp
> using namespace blit;
> ```

### Setting the pen color
Before drawing, you need to set the pen color. To set the current pen color, create a `Pen` object and assign it to the `pen` property of the `Surface`.

```cpp
screen.pen = Pen(255, 0, 0); // Set pen color to red
```

### Clearing the screen
To clear the screen, you can use the `clear()` method.

```cpp
screen.pen = Pen(0, 0, 0); // Set pen color to black
screen.clear(); // Clear the screen (fill with black)
```

{{< alert>}}
This fills the entire surface with the current pen color.
{{< /alert >}}

### Drawing shapes
You can draw various shapes using the following methods:

#### Pixel
To draw a single pixel on the surface, use the `pixel()` method. This method takes one parameter: a `Point` object representing the coordinates of the pixel to draw.

`screen.pixel(Point &p)`

```cpp
screen.pen = Pen(0, 0, 0); // Set pen color to black
screen.clear(); // Clear the screen (fill with black)
screen.pen = Pen(255, 0, 0); // Set pen color to red
screen.pixel(Point(64, 64)); // Draw a pixel (red) at (64, 64)
```

![Alt text](pixel.webp "Red pixel drawn at (64, 64)")

#### Rectangle
To draw a filled rectangle on the surface, use the `rectangle()` method. This method takes one parameter: a `Rect` object representing the position and size of the rectangle to draw.

`screen.rectangle(Rect &r)`

```cpp
screen.pen = Pen(0, 0, 0); // Set pen color to black
screen.clear(); // Clear the screen (fill with black)
screen.pen = Pen(255, 0, 0); // Set pen color to red
screen.rectangle(Rect(10, 10, 50, 100)); // Draw a red rectangle at (10,10) with width 50 and height of 100
screen.pen = Pen(0, 0, 255); // Set pen color to blue
screen.rectangle(Rect(80, 10, 34, 15)); // Draw a blue rectangle at (80,10) with width 34 and height of 15
screen.pen = Pen(0, 255, 0); // Set pen color to green
screen.rectangle(Rect(46, 50, 20, 40)); // Draw a green rectangle at (46,50) with width 20 and height of 40
```

![Alt text](rectangle.webp "Three rectangles drawn in red, blue, and green")

> [!TIP]
> Notice how the rectangles overlap. The last rectangle drawn appears on top of the previous one. This is because drawing operations are performed in the order they are called.