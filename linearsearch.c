#include <stdio.h>
#include <stdbool.h>
int main(){
    int arr[] = {10, 20, 30, 40, 50, 60, 70, 80, 90};
    int size = (sizeof(arr)/sizeof(arr[0]));
    int aranacak = 30;
    bool var = false;
    for (int sayac = 0; sayac < size; sayac++){
        if (arr[sayac] == aranacak) {
            var = true;
        }
    }
    if (var){
        printf("Var.\n");
    }
    else{
        printf("Yok.\n");
    }
    return 0;
}