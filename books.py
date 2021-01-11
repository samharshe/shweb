books_file = open("books.txt", "r")

books = []
authors = []

for i in range(168):
    split_line = (books_file.readline()).split('by', 1)
    books.append(split_line[0])
    authors.append(split_line[-1])

books.reverse()
authors.reverse()

for i in range(168):
    print("<li><span class=\"font-italic\">{}</span> by{}</li>".format(books[i][:-1], authors[i][:-1]))
