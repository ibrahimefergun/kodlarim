//selection sort algoritmasý c dilinde
#include <stdio.h>
int main() {
	int arr[] = {40, 30, 50, 60, 70, 90, 10, 80, 20};
	int n = sizeof(arr) / sizeof(arr[0]);
	
	for(int i =0;i<n-1;i++){
		int kucukindeks = i;
		for(int j=i+1;j<n;j++){
			if(arr[j] < arr[kucukindeks]){
				kucukindeks = j;
			}
		}
		int tmp=arr[i];
		arr[i]=arr[kucukindeks];
		arr[kucukindeks]=tmp;
	}
	printf("Siralanmisdizi: ");
	for(int k=0;k<n;k++){
		printf("%d ",arr[k]);
	}
	return 0;
}
