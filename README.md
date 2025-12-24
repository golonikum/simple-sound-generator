# Simple Sound Generator

A web-based sound generator application built with React that allows users to create and customize sounds using the Web Audio API.

## Features

- Generate customizable sounds with adjustable parameters
- Control duration, frequency, volume, and waveform type
- Simple and intuitive user interface
- Built using React and Web Audio API

## How to Use

1. Adjust the sound parameters using the form controls:
   - **Duration**: Set how long the sound plays (in seconds)
   - **Frequency**: Set the pitch of the sound (in Hz)
   - **Volume**: Set the volume level (0-100)
   - **Type**: Choose the waveform type (sine, sawtooth, square, triangle)
2. Click the "Play sound" button to generate and play the sound

## Technical Details

The application uses the Web Audio API to generate sounds programmatically in the browser. The `playSound` function creates an oscillator node with the specified parameters and connects it to the audio destination.

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/simple-sound-generator.git
   ```

2. Navigate to the project directory:

   ```
   cd simple-sound-generator
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- React
- Web Audio API
- JavaScript
- CSS

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created with CodeSandbox
- Built using the Web Audio API
