#include <fcntl.h>     //for file permissions
#include <sys/mman.h>  //mmap func
#include <sys/stat.h> //stat structure
#include <unistd.h>  //linux syscalls
int main(){
    int fd = open("log.txt", O_RDWR);               //we've opened a file (drw) format
    if (fd == -1) {perror("open");exit(1);}
    struct stat st;fstat(fd, &st);                  //defined "st" as a new "struct stat" type and getting file size etc. with fstat() func
    char *data = mmap(NULL, st.st_size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);     //memory mapping
    if (data == MAP_FAILED) {perror("mmap");exit(1);}
    data[0] = 'x';                                  //changing first data of file with 'x'
    munmap(data, st.st_size);                       //releasing "mmap"ed memory area
    close(fd);                                      //closing file descriptor
    return 0;
}