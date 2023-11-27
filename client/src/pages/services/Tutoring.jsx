import React, { Component } from "react";

import Header from "../../components/Header";

class Tutoring extends Component {
    render() {
        return (
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>

                        <h1>Tutoring</h1>

                        <p>
                            If you're interested in receiving tutoring from me (yay!), **please reach out to me by
                            email (<b>ivan.a.neto@email.ucr.edu</b>) to discuss pricing and particular needs.
                        </p>

                    </section>

                    <section>
                        <h2>Introduction</h2>

                        <p>
                            Tutoring is a huge part of my academic, professional, and personal life.
                            Ever since High School, I've been tutoring my friends and peers for any subject they
                            may be struggling with.
                        </p>

                        <p>
                            Currently I attend the University of California, Riverside as a fourth-year major in
                            Computer Science. I have found myself in a perfect place to keep doing tutoring work
                            for friends, family, and peers.
                        </p>
                    </section>

                    <section>
                        <h2>Educational Background</h2>

                        <h3>Relevant High School Education</h3>

                        <p>
                            In High School, I had the opportunity to partake in AP Calculus AB and AP Calculus BC.
                            These two classes really expanded my knowledge of mathematics at the time. Until that point,
                            I had only had experience with High School level arithmetic, geometry, and trigonometry. But
                            through the help of my amazing teacher <b>Don Tulac</b>, I was able to learn many amazing
                            Calculus concepts that very properly propped me up to be successful in Computer Science.
                        </p>

                        <h3>Relevant University Education</h3>

                        <p>
                            All throughout my stay at the <b>University of California, Riverside</b> I have enjoyed many
                            courses that have expanded my knowledge of mathematics and Computer Science in radical ways.
                            For some honorable mentions, I really enjoyed the CS150 - Automata Theory - course by Professor <b>Paea LePendu</b>. I thoroughly enjoyed the way Prof. LePendu teaches and the many applications
                            that finite-state automata give us. To expand on this, CS120B was a course that I enjoyed, and it
                            is taught by Professor <b>Phillip Brisk</b>. I created a Youtube channel with all the amazing labs
                            and programs that we were assigned in this course, which teaches us how to use finite-state automata, or
                            "state machines" to create state-based programs in arduino. <a href="https://youtu.be/cUCjWoV4INg"><b>Here</b></a> is
                            an example video of my final project for that class.
                        </p>

                        <p></p>

                    </section>

                    <section>
                        <h2>Areas of Expertise</h2>

                        <h3>Data Structures and Algorithms</h3>

                        <p>
                            My journey with Data Structures and Algorithms began with my very first lecture at UCR, which was my CS010A course, or
                            "Introduction to Programming in C/C++". The reason why I say this is my introduction to Data Structures is because <b>C++</b> became
                            my favorite programming language throughout the years. It is the language that I most enjoy programming with,
                            because of its versatility and low-level access. Although I also enjoy other programming languages such as <b>Python</b>
                            , <b>Javascript</b>, <b>Java</b>, among others, there is a sense of control that is lacking from these that is ever present
                            in <b>C++</b>. Without this language, I never would have continued my love for Data Structures and Algorithms concepts that I
                            learned in subsequent courses.
                        </p>

                        <p>
                            CS010B and CS010C served to strengthen my understanding of C/C++, as well as many data structures concepts. Mainly, I learned the
                            intricacies of Object-Oriented Programming with exercises such as dynamic typing with pointers and memory allocated on the heap.
                        </p>

                        <h3>Machine Learning and Data Science</h3>

                        <p>
                            Most of my work throughout my University career has to do with Machine Learning and Data Science. During Summer 2021, 2022, and 2023,
                            I partook in several summer researchships that taught me the basics of Machine Learning with frameworks
                            such as <b>Tensorflow</b> and <b>Pytorch</b>. Further, data manipulation tools in Python such
                            as <b>Numpy</b>, <b>Pandas</b>, and <b>Matplotlib</b> were utilized for visualization.
                        </p>

                        <p>
                            In terms of projects in this area, the resume link at the top contains this information. For the most part, the projects follow
                            a "Data Science Pipeline". This pipeline is standardized among several projects, and it mostly contains (1) preprocessing, (2) visualization,
                            (3) feature engineering, and (4) prediction or regression - depending on the project I'm doing.
                        </p>


                    </section>

                    <section>
                        <h2>Tutoring Experience</h2>

                        <h3>High School Tutoring</h3>

                        <ul>
                            <li>Summer 2018 - AP Calculus AB Tutoring</li>
                            <li>Summer 2018 - Algebra Tutoring</li>
                            <li>Summer 2018 - Geology Tutoring</li>
                        </ul>

                        <h3>College Tutoring</h3>

                        <ul>
                            <li>Fall 2022-Present - Supplemental Instruction Leader</li>
                            <ul>
                                <li>CS010A - Introduction to Programming in C/C++</li>
                                <li>CS010B - Introduction to Object Oriented Programming in C/C++</li>
                                <li>CS010C - Introductory Data Structures and Algorithms in C/C++</li>
                            </ul>
                        </ul>

                    </section>

                </div>
            </div>
        );
    }
}

export default Tutoring;