#include <iostream>

int main(){
    using namespace std;
    cout << "1. Make a c++ code file. This will be your cammand.\n";
    cout << "2. Compile the code using\n";
    cout << "$ g++ (code.cc) -o (final cammand name)\n";
    cout << "3. Make a file tree that looks like this:\n";
    cout << "(cammands) < bin < usr < (appname) > DEBIAN > control\n";
    cout << "4. In the control.(nothing) put\n Package: (name)\nVersion: (num)\nSection: (custom)\nPriority: (optional)\nArchitecture: (all)\nEssential: (no)\nInstalled-Size: (1024/num)\nMaintainer: (mastercoder1323.github.io)\nDescription: (put a description here)\n";
    cout << "5. Make Shure that your cammands are in the bin folder\n";
    cout << "6.You may need to run the following comand to do the next step \n $ chmod 755 (folder)";
    cout << "7. To finnish and compile do the cammand:\n $ dpkg-deb --build (appname/folder)\n";
    cout << "8. To install run the comand\n $ sudo dpkg -i (debian package)\n";
};
