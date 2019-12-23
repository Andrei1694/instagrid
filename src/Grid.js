import React from 'react'
import axios from 'axios'
import Card from './Card'

class Grid extends React.Component {
    
    state = {
        avangers: []
    }
    
    componentDidMount(){
        const url = 'https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers'
        axios.get(url)
            .then(response => {
                this.setState({avangers: response.data.users.splice(0,9)});
                console.log(response.data.users)
            }
            );
    }

    render(){
        const avangers = this.state.avangers.map(avng => {
            return <Card fullName = {avng.user.full_name} photo = {avng.user.profile_pic_url}/>
        })
        return(
            <div className = "Grid">
                <div className = "container">
                    <div className = "row">
                        {avangers}
                    </div>
                </div>
            </div>
        )
    }
}

export default Grid