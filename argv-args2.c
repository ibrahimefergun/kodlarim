#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *args[]) {
    if (argc < 3) {
        printf("\nusage: %s <num1> <num2>\n", args[0]);
    }
    else {
        int x = 0;
        for (int i = 1; i < argc; i++) {
            x = x + atoi(args[i]);
        }
        printf("\nGirdiğiniz sayıların toplamı: %d\n",x);
    }
    return 0;
}