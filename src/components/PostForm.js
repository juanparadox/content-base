// React
import React, {Component} from "react";

class PostForm extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
  }

  handleSubmit = e => {
  }

  setImage = e => {
  	console.log(e.target);
  	console.log(e.target.value);
  	let reader = new FileReader();
  	console.log(reader.readAsDataURL(e.target.value));
  }

  render() {
  	const formStyle = {
  		padding: '30px'
  	}
  	const contentStyle = {
  		margin: '10px 0px',
  		width: '100%',
  		height: '500px'
  	}

    return (
      <div>
        <div className="center f5 lh-copy pa4">
          <span className="f4 b mb3">Post</span>
          <h1 className="f1 f-headline-l fw1 i mt0 lh0">The repercussion of ugliness is endless</h1>
          <textarea className="f1 f-headline-l fw1 i mt0 lh0 athelas input-reset">The repercussion of ugliness is endless</textarea>
          <p>
            The choice of paper size is one of the  first of any given work to be printed. There are two basic paper size systems in the world: the international A sizes, and the American sizes.
          </p>
          <p>
            The international Standard paper sizes, called the A series, is based
            on a golden rectangle, the divine proportion. It is extremely handsome
            and practical as well. It is adopted by many countries around the world
            and is based on the German DIN metric Standards. The United States uses
            a basic letter size (8 1/2 x 11”) of ugly proportions, and results in
            complete chaos with an endless amount of paper sizes. It is a
            by-product of the culture of free enterprise, competition and waste.
            Just another example of the misinterpretations of freedom.
          </p>
          <p>
            These are the basic DIN sizes in mm. for : A0, 841x1189 - A1, 594x841 -
            A2, 420x594 - A3, 297x420 - A4, 210x297 - A5, 148x210 - A6, 105 x148 -
            A7, 74x 105 - A8, 52x74 - A9, 37x52 - A10, 26x37.
          </p>
          <p>
            The A4 is the basic size for stationary. Two thirds of it is a square,
            a nice economical happenstance resulting from the golden rectangle.
            It is one of the reasons we tend to use as much
            as possible the DIN sizes: proportions are always leading to other nice proportions.
          </p>
          <p>
            This does not happen with the American basic size which leads to nothing. I counted 28 different standard sizes in USA!. The only reason we use it is because everybody in USA uses it, all stationary in USA is that size, so are manilla folders,  les and of ce equipment!
            The repercussion of ugliness is endless.
          </p>
        </div>
        <form style={ formStyle }>
        	<h2>Add New Post</h2>
          	<input type="text" placeholder="Title"/>
          	<textarea placeholder="Content" style={ contentStyle }/>
          	<input type="file" placeholder="Image" onChange={ this.setImage }/>
          	<div className="props-container">
            	<select name="page">
              		<option value="home">Home</option>
              		<option value="about">About</option>
            	</select>
            	<select name="sub-category">
              		<option value="our-mission">Our Mission</option>
              		<option value="goals">Goals</option>
            	</select>
          	</div>
          	<button type="button" onClick={ this.handleSubmit }>Add</button>
        </form>
      </div>
    );
  }
}

export default PostForm