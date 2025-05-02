#include <iostream>
using namespace std;

class Araba {
public:
    string marka;
    int yil;

    void tanit(){
        cout << marka << " arabası şahane ve " << yil << " model!" << endl;
    }
};

int main() {
    Araba arabam;
    arabam.marka = "Audi";
    arabam.yil = 2006;

    arabam.tanit();

    return 0;
}