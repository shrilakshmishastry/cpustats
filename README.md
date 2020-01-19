# cpustats

This is a desktop application built to display cpu usage of my machine in real time.

## Installation
Wails CLI can be installed with go get. After installation, you should set it up using wails setup command.



```bash
go get github.com/wailsapp/wails/cmd/wails
wails setup
```
Then to bootstrap the project with the name cpustats:
```bash
wails init
cd cpustats
```

## Usage
To test if it works run the following command:

```bash
wails serve
```
## Final Build and Run
```bash
wails build -d
./cpustats
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


