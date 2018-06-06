import React from 'react'
import BandContainer from '../../containers/Band/BandContainer'

class Band extends React.Component {

    state = {
        bands: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/bands")
            .then(data => data.json())
            .then(data => this.setState({bands: data}))
    }

    showBands = () => (
        this.state.bands.map(band => <BandContainer key={band.id} band={band} />)
    )
    render() {
        return (
            <div>
                {this.showBands()}  
            </div>    
        )
    }
}

export default Band;