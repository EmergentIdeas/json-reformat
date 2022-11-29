Takes a block of json text and reformats using tabs

## Command Line Invocation

This can be invoked on the command line as well.

> json-reformat /path/to/file

Reads /path/to/file and reformats the json in it, writing to stdout.

Takes input from std in

> cat /path/to/file | json-reformat 


Opens an interactive prompt that you can paste into:

> json-reformat 


