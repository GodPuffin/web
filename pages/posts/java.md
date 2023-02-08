---
title: Java Basics
date: 2023-02-07
description: Review Basic Java information.
tag: Programming
author: Marcus Lee
---

# Java Basics

> Note that this is taken from FRC team 296's workshop.

## What is a programming language?

- A programming language is what **allows us to talk to computers**
- When we write and run a program, a computer will "read" our program and do what we ask it to
  - We write programs to perform tasks like controlling a robot, calculating things, , etc.

## What makes Java different from other languages?

- There are many languages you might've heard of, like Python, C, etc.
- Many differences, but the biggest ones are in syntax and purpose
  - **Syntax**
    - Syntax for a programming language is like spelling in english
    - When writing a program, we have to "spell" our words correctly so the computer can properly understand
  - **Purpose**
    - Different languages are written for different reasons
      - HTML is written to render web-pages, MATLAB for engineering analysis, etc.
      - **Java** is an _object-oriented_ language, like Python or C++
        - Java is used for a wide variety of purposes
        - E.g. Robots, Android Apps, and even **MINECRAFT**

## The Building Blocks of Java

The most important building blocks of a program are _variables,_ _operators_, _classes_, and _functions_.

### Variables

- A variable (like in math) is used to represent a piece of data

  - Just as an equation uses a variable _x_ to symbolize a number, a program **uses a variable to symbolize a block of the computer's memory**
  - We declare a variable by writing its **type**, its **name**, and assigning its **value**. E.g.

    ```java
    		int myInteger = 5;
    ```

    - Here, a variable of type **integer** (int) named _myInteger_ is declared and **set equal to 5**

    ```java
    		String myString = "Hello World!";
    ```

    - Here, a variable of type **String** named _myString_ is declared and **set equal to "Hello World"**

  - So **what does the computer do** with this?
    - The computer takes the values we assign, and stores them in the memory
    - Once in the memory, we can use these values to calculate things and much more
  - **Most Common Variable Types:**
    ```java
    int
    float
    double
    String
    ```

---

### Operators

- An **operator** (again, like in math) is used to modify a stored value
  - E.g. consider two **integers** stored in memory, that we want to add. We would first declare the integers, and then use the **+ operator** to perform addition
    ```java
    		int x = 5;
    		int y = 10;
    		int sum = 0;
    		sum = x + y;
    ```
    - The addition of x and y is stored in the variable _sum_
  - Java has many operators. The most important ones we will explore are:
    - Addition &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;**+**
    - Subtraction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **-**
    - Multiplication &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; **\***
    - Division &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **/**
    - Assignment &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **=**
    - Function Call &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **.**
    - | Type           | Symbol |
      | -------------- | ------ |
      | Addition       | **+**  |
      | Substraction   | **-**  |
      | Multiplication | **\*** |
      | Division       | **/**  |
      | Assignment     | **=**  |
      | Function Call  | **.**  |

---

### Classes

- A Java class is a sort of _container_ for your code
  - When a class is declared in java, memory is **allocated** for this class and whatever may be inside it
- **Everything in Java is a class!** Literally everything
  - This isn't really the norm though; Most languages offer classes but don't require them
- E.g. consider your classic "Hello World" program
  ```java
  	class HelloWorld
  	{
  	    public static void main(String[] args)
  	    {
  	        System.out.println("Hello World!");
  	    }
  	}
  ```
  - Here you can see that the _main_ function of the program is contained within a class, called _HelloWorld_
    - This file would be saved as `HelloWorld.java`
- **Access Modifiers -- Public & Private**
  - _Variables_ and _functions_ either declared as:
    - **Public**: All functions from any file can access the data/function
    - **Private**: Only functions within the surrounding class can access them

---

### Functions

- Functions are **called** to perform some sort of routine
  - This routine could be adding two numbers, printing a statement, whatever you'd like!
- We create functions so that we don't have to rewrite code
- Functions consist of three main parts:
  - A return type, arguments, and a body
    - The **return type** tells us what type of variable the function will give us (maybe an integer or a string)
    - The **arguments** are what we can _pass_ to a function (maybe we pass it one integer, maybe two)
    - The **body** defines what we do with the arguments, and what we return
- E.g. take a look at the following two functions
  ```java
  	public static int add(int x, int y)
  	{
  		int sum = x + y;
  		return sum;
  	}
  ```
  - Here the **return type** is integer, the **arguments** are the two integers _x_ and _y_, and the **body** of the function adds the two arguments.
- A function could also not return anything. In that case, we say the return type is `void`

  ```java
  	private static void print()
  	{
  		System.out.println("Hello World!");
  	}
  ```

  - Note that this function has no return type, nor does it take any arguments! It just prints _Hello World!_ to the terminal.

- Finally, to _invoke_ or _call_ these functions, we would do the following
  ```java
  	int sum = add(5,10);	// here we assign the return value to the variable sum
  	print();		// here we invoke a void function with no arguments
  ```

## Conditional Statement and Iterators

- Conditional statment and iterators are tools we use in Java and other languages to control the flow of a program

### Conditional Statement

- A **conditional statement** checks is a conditions is met, and acts based on if it is met or not
  - The condition could be comparing two values, checking if two values are equal, etc.
- The `if` statement

  - An _if statement_ allows a program to enter a **body** of code if the condition presented is met
  - E.g. suppose we have the following situation

  ```java
  	int x = 5;
  	int y = 10;

  	if(x > y)
  	{
  		// do stuff
  	}
  	if(x < y)
  	{
  		// do more stuff
  	}
  	if(x == y)
  	{
  		// do even MORE stuff
  	}
  ```

  - Which of these would execute?

- Conditions we could use include
  - | Type                     | Symbol |
    | ------------------------ | ------ |
    | Greater Than             | **>**  |
    | Less Than                | **<**  |
    | Greater Than or Equal to | **>=** |
    | Less Than or Equal to    | **<=** |
    | Equal                    | **==** |
    | Not Equal                | **!=** |

### Iterators

- An **iterator** makes a body of code loop until a _condition_ is met. There are two types:
- The `for` loop
  - A _for loop_ makes a body of code execute as many times as we want it to
    - We could make a body of code loop as little as 1 time or as many as 10000000 times
  - E.g., if we wanted to make a loop that runs 100 times and adds 1 to a variable, we could do
  ```java
  	int x = 0;
  	for(int i = 0; i<100; i++)
  	{
  		x = x+1;
  	}
  ```
  - What does the stuff in the parenthesis mean?
    - `int i = 0;` declares a new variable _i_
    - `i<100` means "Keep looping while `i` is less than 100"
    - `i++` means add 1 to _i_ after _every loop_
- The `while` loop
  - A _while loop_ loops forever until a condition is met
    - It's kind of like a for loop, except instead of stopping when a number is reached, the while loop stops when a _condition is reached_.
  - E.g. if we wanted a while loop to run 100 times and add 1 to a variable, we could say
  ```java
  	int x = 0;
  	while(x < 100)
  	{
  		x = x+1;
  	}
  ```
