// matrisin transpozunu al

#include <stdio.h>
#include <stdlib.h>

struct Matris{int rows;int cols;int **data;};
struct Matris*matrisOlustur(){
    struct Matris*m=(struct Matris*)malloc(sizeof(struct Matris));
    printf("\nMatrisiniz kaç satırlı: ");
    scanf("%d",&(m->rows));
    printf("\nMatrisiniz kaç sütun: ");
    scanf("%d",&(m->cols));
    m->data=malloc((*m).rows*sizeof(int*));
    for (int i=0;i<(*m).rows;i++){
        m->data[i]=malloc((*m).cols*sizeof(int));
    }
    for (int i=0;i<(*m).rows;i++){
        for (int j=0;j<(*m).cols;j++) {
            printf("\nindex[%d][%d] değerini girin: ",i,j);
            scanf("%d",&(m->data[i][j]));
        }
    }
    return m;
}
struct Matris* transpozunuAl(struct Matris *m){
    struct Matris*t=malloc(sizeof(struct Matris));
    t->rows = m->cols;t->cols=m->rows;
    t->data = malloc(t->rows * sizeof(int*));
    for (int i = 0; i < t->rows; i++) {
        t->data[i] = malloc(t->cols * sizeof(int));
    }
    for (int i = 0; i < m->rows; i++) {
        for (int j = 0; j < m->cols; j++) {
            t->data[j][i] = m->data[i][j];
        }
    }
    return t;
}

void yazdir(struct Matris *m) {
    for(int i = 0; i < m->rows; i++) {
        for(int j = 0; j < m->cols; j++) {
            printf("%d ",(*m).data[i][j]);
        }
        printf("\n");
    }
}

void freemat(struct Matris *m){
    for (int i=0;i<(*m).rows;i++){
        free(m->data[i]);
    }
    free(m->data);
    free(m);
}

int main() {
    struct Matris *mat = matrisOlustur();
    struct Matris* t = transpozunuAl(mat);
    yazdir(t);
    freemat(mat);
    freemat(t);
    return 0;
}