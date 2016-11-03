## Learn the Command Line
codecademy 과정 정리 

- The command line is a text interface for your computer. It's a program that takes in commands, which it passes on to the computer's operating system to run.

- From the command line, you can navigate through files and folders on your computer, just as you would with Finder on Mac OS or Windows Explorer on Windows. The difference is that the command line is fully text-based.

- The advantage of using the command line is its power. You can run programs, write scripts to automate common tasks, and combine simple commands to handle difficult tasks - making it an important programming tool.

#### ls 
`ls` lists all files and directories in the working directory.<br>
폴더와 파일 list를 보여준다. 
예) 2016 main.txt

#### pwd 
`pwd` outputs the name of the current working directory.<br>
현재 작업 디렉토리(working directory) 경로<br>
예) `/home/workspace/blog`

#### cd 
`cd` switches you into the directory you specify. <br>
예) cd 2016 // 2016폴더로 이동. Here the 2016 directory is an argument for the cd command. 2016폴더는 cd명령어의 argument이다. 

#### cd ..
To move up one directory<br>
한 디렉토리 위로 이동 
여러 디렉토리 위로 이동시 cd `../..`

#### mkdir 
`mkdir` creates a new directory in the working directory.<br>
new directory 만들기

#### touch
`touch` creates a new file inside the working directory.<br>
new file 만들기 