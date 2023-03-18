#include <iostream>
int main(){
	using namespace std;
	cout << "whatis (cammand) | tells you what (cammand) does\n";
	cout << "touch (filename) | makes a file called (filename)\n";
	cout << "mkdir (name)     | makes a directory/folder named (name)\n";
	cout << "rmdir (name)     | deletes a directory/folder named (name)\n";
	cout << "cd (directory)   | changes the directory you are in to the one specified. If given - then goes to the home directory\n";
	cout << "sudo/apt/install | to learn about these enter the cammand su-apt-inst to view th info page\n";
	cout << "ls [directory]   | lists th files in the current directory. If given, it lists the files in the directory given\n";
	cout << "help             | lists posible cammands\n";
	cout << "(cammand) --help | gives full info about the cammand\n";
	cout << "open (file)      | opens the (file) in default viewer \n";
	cout << "nano (textfile)  | best builtin text editor for text files. the file opened is (textfile)\n";
	cout << "file (file)      | tells you what kind of file is (file)\n";
	cout << "less (textfile)  | shows you what is inside of (textfile)\n";
}
