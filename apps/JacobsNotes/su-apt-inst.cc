#include <iostream>
int main(){
	using namespace std;
	cout << "Sudo is most often used with apt making\n $ sudo apt (cammand)\n All of these have that before them\n";
	cout << "..list                          | list packages(installable)\n";
	cout << "..search (thing)                | searches (thing) in package descriptions\n";
	cout << "..show (package)                | shows the (package) details\n";
	cout << "..install (package)             | installs (package)\n";
	cout << "..reinstall (package)           | you get it (look up)\n";
	cout << "..autoremove                    | removes unused packages\n";
	cout << "$ ..update +$ ..dist-upgrade    | completely updates the terminal\n";
	cout << "$ sudo apt-get purge (package)  | completely removes a package including dependancys and config files\n";
	cout << "$ sudo apt-get remove (package) | just uninstalls (package)\n";
	cout << "$ sudo dpkg -i (path to deb)    | installs the deb package\n";
}
