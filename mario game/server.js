const socket = io();

// Mengirim data skor ke server
function updateScore(score) {
    socket.emit('updateScore', { score });
}

// Menerima pembaruan skor dari server
socket.on('scoreUpdated', (data) => {
    console.log('Score updated:', data.score);
    // Perbarui tampilan skor di UI
});
