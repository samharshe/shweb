books_file = open("/Users/samharshe/Documents/Programming/SH/txt/books.txt", "r")

books = []
authors = []

for i in range(173):
    split_line = (books_file.readline()).split('|', 1)
    books.append(split_line[0])
    authors.append(split_line[-1])

books.reverse()
authors.reverse()

for i in range(173):
    print("<li><span class=\"font-italic\">{}</span> by {}</li>".format(books[i], authors[i][:-1]))
