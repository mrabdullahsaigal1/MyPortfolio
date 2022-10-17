const Portfolio = function () {
    function makeWords() {
        var words = [
            {
                text: "REACT JS",
                weight: 8
            }, {
                text: "JavaScript",
                weight: 14
            }, {
                text: "C++",
                weight: 3
            }, {
                text: "Nodejs",
                weight: 7
            }, {
                text: "PHP",
                weight: 10
            }
        ];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 140 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function () {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

 

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "I am a Software Engineer ." , " I am a Web 3.0 FullStack Developer .", " I am a Probelm Solver .", "I am FootBaller  ", "I am TechGeek"
            ],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 5,
            contentType: 'text',
            callback: function () {
                $("#writing-text").css({ "color": "#fff", "background-color": "#00ADB5" });
            },
            preStringTyped: function () { },
            onStringTyped: function () { }
        });
    }

    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
