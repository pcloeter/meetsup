import React from "react";



class CreateGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    this.props.createGroup(group);
  }

  update (field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  // showErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, idx) => {
  //           return <li key={`error-${idx}`}>{error}</li>
  //         }
  //       )}
  //     </ul>
  //   )
  // }

  render () {
    return (
      <div className="create-group-container">
      <div className="create-group-form-container">
      <form className="signup-form" onSubmit={this.handleSubmit}>


            <div className='create-group-inputs-container'>


            <div className="create-group-input">
              <span className="step-span">Step 1 of 4</span>
                <label htmlFor='form-hometown'>What's your new MeetSup's hometown?</label>
                  <input className="create-group-label" 
                    id="form-hometown"
                    type="hometown" 
                    value={this.state.hometown}
                    onChange={this.update('hometown')}/>
            </div>

            <div className="create-group-input">
              <span className="step-span">Step 2 of 4</span>
                <label htmlFor='form-name'>What will your MeetSup's name be?</label>
                  <input className="create-group-label" 
                    id="form-name"
                    type="text" 
                    value={this.state.name}
                    onChange={this.update('name')}/>
            </div>

            <div className="create-group-input">
              <span className="step-span">Step 3 of 4</span>
                <label htmlFor='form-description'>Describe who should join, and what your MeetSup <br/>
                will do.</label>
                  <input className="create-group-label" 
                    id="form-description"
                    type="text" 
                    value={this.state.description}
                    onChange={this.update('description')}/>
            </div>

            <div className="create-group-input">
              <span className="step-span">Step 4 of 4</span>
                <label htmlFor='form-name'>What it means to be a MeetSup</label>
                  <ul>
                    <li>Real, in-person conversations</li>
                    <li>Open and honest intentions</li>
                    <li>Always safe and respectful</li>
                    <li>Put your members first</li>
                  </ul>
                </div>
                  

            </div>

          <input className="submit-button" type="submit" value="Continue"/>
        
      </form>
      </div>
      </div>
    )
  }
}

export default CreateGroup;