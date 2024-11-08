document.querySelector("#convert").addEventListener('click', async ()=>{
    let file = document.querySelector("#midi-input").files[0]
    const midiData = await file.arrayBuffer()
    const midi = new Midi(midiData)

   document.querySelector("#output").innerText = 'local PianoModule = require(game.ReplicatedStorage.PianoModule)\n\n'

    midi.tracks.forEach(track => {
        console.log(track.instrument.family)
        track.notes.forEach(note => {
            document.querySelector("#output").innerText += `PianoModule.PlayNote("${note.pitch}", ${note.octave}, ${note.time}, ${note.duration})\n`
        })
    });

    // document.querySelector("#output").select();
    navigator.clipboard.writeText(document.querySelector("#output").innerText)
    alert('Copied to clipboard!')

})