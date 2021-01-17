books_file = open("/Users/samharshe/Documents/Programming/SH/txt/books.txt", "r")

books = []
authors = []

for i in range(168):
    split_line = (books_file.readline()).split('by', 1)
    books.append(split_line[0])
    authors.append(split_line[-1])

for i in range(168):
    print("{}|{}".format(books[i][:-1], authors[i][1:-1]))
