//An ENUM is a group of pairs of values (for ex a number and a readable lable)

//On this case, admin's value will be 0, read_only will be 1, and author will be 2
enum Role {
  admin,
  read_only,
  author,
}

// This will print 0
console.log(Role.admin);

//On this case, admin's value will be 1, read_only will be 2, and author will be 3
enum RoleStartingOn1 {
  admin = 1,
  read_only,
  author,
}

// This will print 3
console.log(RoleStartingOn1.author);
