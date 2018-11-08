import React, {Component} from 'react'
import './MemeGenerator.css'
import Meme from './Meme'
import SiteNav from './SiteNav'
import Image from './Image'

class MemeGenerator extends Component {
    state = {
        title: '',
        image: '',
        text: ''
    }

    async componentDidMount() {
        await this.getMemes()
    }

    getMemes = async () => {

        const response = await fetch('http://localhost:3080/meme-generator', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        this.setState({
            memes: data
        })
    }
 
    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleImageChange = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    savedMeme = async (x) => {
        if(this.state._id){
            let body = {
                method: 'POST',
                body: JSON.stringify({
                    title: this.state.title,
                    image: this.state.image,
                    text: this.state.text,
                    _id: this.state._id
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                
            }
            fetch('http://localhost:3080/meme-generator/update', body)
            this.getMemes()
    
        }
        else{
        let body = {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                image: this.state.image,
                text: this.state.text
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:3080/meme-generator', body)
        this.getMemes()
        this.setState({
        })
    }
}

    showErrorMessage = () => {
        if (this.state.message) {
            return this.state.message
        }
    }

    renderMemes = () => {
        console.log(this.state)
        if (this.state.memes)
        return this.state.memes.map(
            (meme, i) => {
                return (
                    <Meme key={i} title={meme.title} selectHandler={()=>{this.memeSelected(meme)}} deleteHandler={()=>{this.memeDeleted(meme._id)}} allowDelete={true} />

                )
            }
        )
    }
    // renderMemeImage = () => {
    //     console.log(this.state)
    //     if (this.state.memes)
    //     return this.state.memes.map(
    //         (meme, i) => {
    //             return (

    //             )
    //         }
    //     )
    // }

    memeSelected = (e) => {
        this.setState(e)
        console.log(e)
    }

    memeDeleted = (id) => {
        console.log('function working')
        let body = {
            method: 'POST',
            body: JSON.stringify({
            _id: id
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            
        }
        fetch('http://localhost:3080/meme-generator/delete', body).then((e)=>{
            this.getMemes()
        console.log(e)
        }).catch(e=> console.log(e))
        
    }

    allowDelete = true
    render() {
        console.log(this.state)
        return(
            <div>
                <SiteNav />
                <main>
                    <section>
                        <h2>Meme Generator</h2>
                        {this.renderMemes()}
                    </section>
                    <section>
                        {this.showErrorMessage()}
                        <h2>Create</h2>
                        <div>
                            <label>Title:</label>
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input type="text" value={this.state.image} onChange={this.handleImageChange} />
                        </div>
                        <div>
                            <label>Text:</label>
                            <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                        </div>
                        <button onClick={this.savedMeme}>Generate</button>
                    </section>
                    <Image image={this.state.image} />

                </main>
            </div>
        )
    }
}
export default MemeGenerator