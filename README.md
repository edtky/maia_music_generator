# maia_music_generator

This is the demo implementation of our Musical Neural Net for music generation.

maia is an AI trained on Mozart’s pieces and tasked to finish the Lacrimosa movement in Mozart’s Requiem - which he had famously written till the first eight bars at the time of his passing. Lacrimosa is Latin for “weeping”.

In this demo, you can play any sequence of music on a piano inside Jupyter notebook and have maia finish the rest of the piece for you.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

1. Clone this Github repo into your local machine.

2. You will need to have the following packages install: music21, jupyter, numpy

3. Open the iPython Notebook named "demo".

4. Run all cells in the notebook up till the one that says "Run only one of the following cells:"

5. Choose only one of the 25- or 49- or 61-keys piano to use. Run that one cell.

6. Load the pre-trained model and start the demo!

## Demo

1. Run cell for Step 1 and play any sequence you like on the piano keyboard

2. Run Step 2 and let maia complete the piece for you

3. Run Step 3 and note that the text file predicted by maia is being decoded into a midi file

4. Go to output/midi/ to find and play your new midi file.


## Acknowledgement

- Christine Payne, Open AI Scholar, for her amazing work!
- DJ Gan Team @ Berkeley MEng


## Contact

If you face any issues or have any questions, please contact me at edwardtky@berkeley.edu
