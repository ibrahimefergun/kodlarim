//bubble sort

#include <stdio.h>
int main() {
	int arr[] = {20,50,40,70,80,10,90,30,60};
	int n = sizeof(arr) / sizeof(arr[0]);
	int i, j, tmp;
	
	for(i = 0; i < n-1; i++) {
		for(j = 0; j < n-1; j++) {
			if (arr[j] > arr[j+1]){
				tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	printf("\nSiralanan dizi:");
	printf("\n");
	for(int k = 0; k < n; k++){
		printf("%d ",arr[k]);
	}
	return 0;
}
