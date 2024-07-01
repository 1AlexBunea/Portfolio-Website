import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [output, setOutput] = useState('');
  const [currentCommand, setCurrentCommand] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const outputRef = useRef(null);

  const commands = [
    "ls -la",
    "git status",
    "npm run build",
    "docker-compose up -d"
  ];

  const outputs = [
    `total 32
drwxr-xr-x   5 user  group   160 Jun 30 10:00 .
drwxr-xr-x  10 user  group   320 Jun 29 09:30 ..
-rw-r--r--   1 user  group  1204 Jun 30 09:45 index.html
-rw-r--r--   1 user  group  2584 Jun 30 09:50 styles.css
-rw-r--r--   1 user  group  3782 Jun 30 09:55 script.js`,
    `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   styles.css`,
    `> project@1.0.0 build
> webpack --mode production

asset bundle.js 62.5 KiB [emitted] [minimized] (name: main) 1 related asset
modules by path ./src/*.js 25.1 KiB
  ./src/index.js 23.9 KiB [built] [code generated]
  ./src/utils.js 1.2 KiB [built] [code generated]`,
    `Creating network "project_default" with the default driver
Creating project_db_1    ... done
Creating project_redis_1 ... done
Creating project_app_1   ... done`
  ];

  useEffect(() => {
    const typeCommand = () => {
      if (charIndex < commands[commandIndex].length) {
        setCurrentCommand(prev => prev + commands[commandIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(typeOutput, 500);
      }
    };

    const typeOutput = () => {
      setOutput(prev => prev + `$ ${commands[commandIndex]}\n${outputs[commandIndex]}\n\n`);
      setCurrentCommand('');
      setCharIndex(0);
      setCommandIndex((commandIndex + 1) % commands.length);
    };

    const timer = setTimeout(typeCommand, 100);

    return () => clearTimeout(timer);
  }, [commandIndex, charIndex]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const checkWidth = () => {
      setIsVisible(window.innerWidth > 700);
    };

    window.addEventListener('resize', checkWidth);
    checkWidth(); // Check on initial render

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="terminal">
      <pre ref={outputRef} className="output">{output}</pre>
      <div className="command-line">
        <span className="prompt">$</span>
        <span className="command">{currentCommand}</span>
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default Terminal;