package main

import (
  "github.com/leaanthony/mewn"
  "github.com/wailsapp/wails"
  "cpu/pkg/sys"
)

func basic() string {
  return "World!"
}

func main() {

  js := mewn.String("./frontend/build/static/js/main.js")
  css := mewn.String("./frontend/build/static/css/main.css")
  stats := &sys.Stats{}
  app := wails.CreateApp(&wails.AppConfig{
    Width:  1024,
    Height: 768,
    Title:  "CPU",
    JS:     js,
    CSS:    css,
    Colour: "#131313",
  })
  app.Bind(stats)
  app.Run()
}
