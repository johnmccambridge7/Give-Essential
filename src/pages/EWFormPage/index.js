import React, { useState, useCallback, useEffect } from "react";
import axios, { post } from "axios";
import { Link } from "react-router-dom";
import {
  Screen,
  CenteredFlex,
  Header, HeaderMobile,
  Title, TitleMobile,
  Subtitle, SubtitleMobile, SubtitleMobile2,
  SubmitButton, SubmitButtonMobile,
  ButtonText,
  Text, TextMobile,
  PinkSubmitButton, PinkSubmitButtonMobile,
  StyledInput,StyledInputMobile,
  StyledLabel,
  StyledText, StyledTextMobile,
  StyledButton,StyledButtonMobile,
  RowFlex,
  ColumnFlex,
  SmallText, SmallTextMobile,
  RedText, RedTextMobile
} from "./styles";
import { Form, FormGroup, Container, Row, Col, Label, Input } from 'reactstrap';
import IconButtonGroup from "./components/IconButtonGroup";
import TextButtonGroup from "./components/TextButtonGroup";
import { items, categories, occupations, yesNo } from "./buttonGroupData";
import useStep from '../../hooks';
import EWMatchedPage from '../EWMatchedPage';
import  WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:thin', 'open-serif'],
  }
});

const states = [
  'State*',
  'Alaska',
  'Alabama',
  'Arkansas',
  'American Samoa',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming',
];

const referrals = [
  'How did you hear about us?',
  'Friend or Family',
  'Social Media',
  'News',
  'Other',
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const inputMobileStyle = {
  width: "74vw",
  color: "#8CC9BA",
  borderRadius: 10,
  border: "2px solid #8CC9BA",
  backgroundColor: "#FFF",
  height: "14vh",
  fontSize: "12px",
  fontFamily: "Montserrat",
}

const inputMobileStyle1 = {
  width: "74vw",
  color: "#8CC9BA",
  borderRadius: 10,
  border: "2px solid #8CC9BA",
  backgroundColor: "#FFF",
  height: "19vh",
  fontSize: "11.5px",
  fontFamily: "Montserrat",
  // textAlign: "center"
}

const inputMobileStyle2 = {
  width: "74vw",
  color: "#8CC9BA",
  borderRadius: 10,
  border: "2px solid #8CC9BA",
  backgroundColor: "#FFF",
  height: "10vh",
  fontSize: "12px",
  marginTop: "0px",
  fontFamily: "Montserrat",
  // textAlign: "center"
}

export default function EssentialWorkerFormPage() {
  const [valueState, setValues] = useState([]);
  const [itemState, setItems] = useState([]);
  const [itemStateError, setitemStateError] = useState("");
  const [categoryState, setCategories] = useState([]);
  const [categoryStateError, setcategoryStateError] = useState("");
  const [industryState, setIndustries] = useState([]);
  const [industryStateError, setindustryStateError] = useState("");
  const [itemDesc, setitemDesc] = useState("");
  const [itemDescError, setitemDescError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [referrer, setReferrer] = useState("");
  const [referrerError, setReferrerError] = useState("");
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState("");
  const [street2, setStreet2] = useState("");
  const [street2Error, setStreet2Error] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [circumstances, setCircumstances] = useState("");
  const [circumstancesError, setCircumstancesError] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobTitleError, setJobTitleError] = useState("");
  const [employer, setEmployer] = useState("");
  const [employerError, setEmployerError] = useState("");
  const [industry, setIndustry] = useState("");
  const [comments, setComments] = useState("");
  const [proof, setProof] = useState("");
  const [proofError, setProofError] = useState("");
  const [share, setShare] = useState([]);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [checkError, setCheckError] = useState("");
  const { currentStep, next } = useStep(0);

  const onItemDescChange = (event) => {
    setitemDesc(event.target.value);
    console.log(itemDesc);
  };

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
    console.log(lastName);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };

  const onReferrerChange = (event) => {
    setReferrer(event.target.value);
    console.log(referrer);
  };

  const onStreetChange = (event) => {
    setStreet(event.target.value);
    console.log(street);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  const onStateChange = (event) => {
    setState(event.target.value);
    console.log(state);
  };

  const onZipChange = (event) => {
    setZip(event.target.value);
    console.log(zip);
  };

  const onCircumstancesChange = (event) => {
    setCircumstances(event.target.value);
    console.log(circumstances);
  };

  const onJobTitleChange = (event) => {
    setJobTitle(event.target.value);
    console.log(jobTitle);
  };

  const onEmployerChange = (event) => {
    setEmployer(event.target.value);
    console.log(employer);
  };

  const onStreet2Change = (event) => {
    setStreet2(event.target.value);
    console.log(street2);
  };

  const onCommentsChange = (event) => {
    setComments(event.target.value);
    console.log(comments);
  };

  const onCheck1Change = (event) => {
    setCheck1(!check1);
    console.log(check1);
  };

  const onCheck2Change = (event) => {
    setCheck2(!check2);
    console.log(check2);
  };

  const onProofChange = (event) => {
    setProof(event.target.files[0]);
    console.log(proof);
  };

  const onSubmit = e => {
    e.preventDefault();

    const proofString = ""
    const url = 'https://giveessential-286602.ue.r.appspot.com/api/ew/upload';
    const formData = new FormData();
    formData.append('proof', proof)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    post(url, formData, config)
    .then((response)=>{
      proofString = response.data;
    })

    let shareInfo;
    if (share && share[0] === 'yes') {
      shareInfo = true;
    } else {
      shareInfo = false;
    }

    const newUser = 
    {
      "ews": [
        {
          "name": {
            "first": firstName,
            "last": lastName
          },
          "email": email,
          "phone": phone,
          "referrer": referrer,
          "comments": comments,
          "consent": true,
          "address": {
            "street": street + street2,
            "city": city,
            "state": state,
            "zip": zip
          },
          "items": itemState,
          "itemsDesc": itemDesc,
          "circumstances": circumstances,
          "categories": categoryState,
          "occupation": {
            "jobTitle": jobTitle,
            "employer": employer,
            "industry": industryState,
            "other": "",
            "proof": proofString
          },
          "share": shareInfo
        }
      ]
    };

    axios
      .post("https://giveessential-286602.ue.r.appspot.com/api/ew", newUser)
      .then(() => {
        console.log("Post successful!")
      })
      .catch(() => {
        console.log("Request failed!")
      })
      window.location.href = "/essential-worker-matched";
  };

  const toggle = (value, state) => () => {
    let updateState = state === "valueState" ? setValues : setItems;
    const prevState = state === "valueState" ? valueState : itemState;
    const i = prevState.indexOf(value);
    const updatedState = [...prevState];
    if (i === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(i, 1);
    }
    updateState(updatedState);
    console.log(itemState);
  };

  const toggleCategories = (value, state) => () => {
    let updateState = setCategories;
    const prevState = categoryState;
    const i = prevState.indexOf(value);
    const updatedState = [...prevState];
    if (i === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(i, 1);
    }
    updateState(updatedState);
    console.log(categoryState);
  };

  const toggleIndustries = (value, state) => () => {
    let updateState = setIndustries;
    const prevState = industryState;
    const i = prevState.indexOf(value);
    const updatedState = [...prevState];
    if (i === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(i, 1);
    }
    updateState(updatedState);
    console.log(industryState);
  };

  const singleSelectToggle = (value, state) => () => {
    let updateState = state === 'share' ? setShare : setShare;
    const prevState = state === 'share' ? share : share;
    let updatedState;
    if (prevState[0] === value) {
      updatedState = [];
    } else {
      updatedState = [value];
    }
    updateState(updatedState);
  };

  const validateFirstPage = () => {
    if (itemState.length === 0) {
      setitemStateError("Please specify what items you would like to receive");
    } else {
      setitemStateError("");
    }

    if (circumstances === "") {
      setCircumstancesError("Please provide a description of the items you would like to receive");
    } else {
      setCircumstancesError("");
    }

    if (itemDesc === "") {
      setitemDescError("Please provide a description of your circumstances");
    } else {
      setitemDescError("");
    }

    if (itemState.length > 0 && circumstances != "" && itemDesc != "") {
      next();
    }
  }

  const validateSecondPage = e => {
    e.preventDefault();
    if (firstName === "") {
      setFirstNameError("Please provide a first name");
    } else {
      setFirstNameError("");
    }

    if (lastName === "") {
      setLastNameError("Please provide a last name");
    } else {
      setLastNameError("");
    }

    if (email === "") {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Please provide a valid phone number");
    } else {
      setPhoneError("");
    }

    if (street === "") {
      setStreetError("Please provide a valid street");
    } else {
      setStreetError("");
    }

    if (city === "") {
      setCityError("Please provide a valid city");
    } else {
      setCityError("");
    }

    if (state === "") {
      setStateError("Please provide a valid state");
    } else {
      setStateError("");
    }

    if (zip === "") {
      setZipError("Please provide a valid zip");
    } else {
      setZipError("");
    }

    if (categoryState.length === 0) {
      setcategoryStateError("Please provide a category");
    } else {
      setcategoryStateError("");
    }

    if (jobTitle === "") {
      setJobTitleError("Please provide a job title or write N/A");
    } else {
      setJobTitleError("");
    }

    if (employer === "") {
      setEmployerError("Please provide an employer or write N/A");
    } else {
      setEmployerError("");
    }

    if (proof === "") {
      setProofError("Please upload proof");
    } else {
      setProofError("");
    }

    if (industryState.length === 0) {
      setindustryStateError("Please provide an industry");
    } else {
      setindustryStateError("");
    }

    if (firstName != "" && lastName != "" && email != "" && phone != "" && street != "" && city != "" && state != "" && zip != "" && categoryState.length > 0 && jobTitle != "" && employer != "" && proof != "" && industryState.length > 0) {
      next();
    } 
  }

  const validateThirdPage = () => {
    if (check1 === false || check2 === false) {
      setCheckError("You must agree to the conditions in order to submit!");
    } else {
      onSubmit();
    }
  }

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const {height, width} = useWindowDimensions();

  // add if case for ipad

  const renderStep = () => {
    if (width < 420) {
      switch (currentStep) {
        case 0:
          return (
              <Screen style={{ paddingBottom: 10 }}>
                <CenteredFlex>
                  <HeaderMobile style={{paddingRight: "0px"}}>Essential Worker Form</HeaderMobile>
                  <SubtitleMobile style={ {marginBottom: "15px"}}>The following questions ask about which items you need.
                    We will pass this information along to your match so that they are able
                    to send an appropriate and helpful gift.</SubtitleMobile>
                  <TitleMobile>What types of items do you need?*</TitleMobile>
                  <RowFlex>
                    <ColumnFlex>
                      <CenteredFlex style={{paddingLeft: "8px"}}>
                        <IconButtonGroup
                            data={items}
                            selected={itemState}
                            toggle={toggle}
                            state="itemState"
                        />
                        <RedTextMobile>{itemStateError}</RedTextMobile>
                      </CenteredFlex>
                    </ColumnFlex>
                  </RowFlex>
                </CenteredFlex>
                <CenteredFlex>
                  <TitleMobile>Please specify what types of specific items would be most helpful for you to receive.*</TitleMobile>
                  <Input
                      style={inputMobileStyle}
                      type="textarea"
                      name="circumstances"
                      onChange={onItemDescChange}
                      value={itemDesc}
                      placeholder="Please specify products or brands or write N/A if not applicable."
                  />
                  <RedTextMobile>{itemDescError}</RedTextMobile>
                </CenteredFlex>
                <CenteredFlex>
                  <TitleMobile>Please provide a description of your circumstances so we can better understand what you might need.*</TitleMobile>
                  <Input
                      style={inputMobileStyle1}
                      type="textarea"
                      name="circumstances"
                      onChange={onCircumstancesChange}
                      value={circumstances}
                      placeholder="Are you a grocery shopper who needs help with gas? Are you a single mother who needs activities for her kids? Feel free to tell us anything about your situation and the items that you need so that we can better help you."
                  />
                  <RedTextMobile>{circumstancesError}</RedTextMobile>
                </CenteredFlex>
                <CenteredFlex>
                  <TitleMobile>Can we anonymously share your story on Give Essential media?*</TitleMobile>
                  <TextMobile style={ {color: "#6c757d"}}>We want to share stories to help reach donors. Stories will be completely anonymous on our public media; all personal identification information will be removed (name, company name, address, etc).</TextMobile>
                </CenteredFlex>
                <CenteredFlex style={{paddingBottom: "10px"}}>
                  <TextButtonGroup
                      data={yesNo}
                      selected={share}
                      toggle={singleSelectToggle}
                      state="share"
                  />
                </CenteredFlex>
                <CenteredFlex>
                  <TitleMobile>Any additional notes or comments?</TitleMobile>
                  <Input
                      style={inputMobileStyle2}
                      type="comments"
                      name="comments"
                      onChange={onCommentsChange}
                      value={comments}
                      placeholder="Comments"
                  />
                  {" "}
                  <SubmitButtonMobile style={{ marginTop: 40}} onClick={validateFirstPage}>
                    <ButtonText>CONTINUE</ButtonText>
                  </SubmitButtonMobile>
                </CenteredFlex>
              </Screen>
          );
        case 1:
          return (
              <Container className="hi" style={{ paddingTop: 50, paddingLeft: "12%", paddingRight: "12%" }}>
                <CenteredFlex>
                  <SubtitleMobile2>
                    The following questions ask for your contact information and about your background. Your contact information is used to facilitate the match. Your background is used to create a more meaningful match between you and your donor — we've found this results in more personalized donations!
                  </SubtitleMobile2>
                </CenteredFlex>
                <Form style={{ paddingTop: 10 }} >
                  <Text>BASIC INFO</Text>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="name"
                            name="name"
                            onChange={onFirstNameChange}
                            value={firstName}
                            id="setFirstName"
                            placeholder="First Name*"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="name"
                            name="name"
                            onChange={onLastNameChange}
                            value={lastName}
                            id="setLastName"
                            placeholder="Last Name*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><Col className="d-flex"><RedTextMobile>{firstNameError} {lastNameError}</RedTextMobile></Col></Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="email"
                            name="email"
                            onChange={onEmailChange}
                            value={email}
                            id="email"
                            placeholder="Email*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><Col className="d-flex"><RedText>{emailError}</RedText></Col></Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="number"
                            name="number"
                            onChange={onPhoneChange}
                            value={phone}
                            id="phoneNumber"
                            placeholder="Phone Number*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><RedTextMobile>{phoneError}</RedTextMobile></Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="mailingaddress"
                            name="mailingaddress"
                            onChange={onStreetChange}
                            value={street}
                            id="mailingAddress"
                            placeholder="Mailing Address*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><RedTextMobile>{streetError}</RedTextMobile></Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="mailingaddress2"
                            name="mailingaddress2"
                            onChange={onStreet2Change}
                            value={street2}
                            id="mailingAddress2"
                            placeholder="Mailing Address 2*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            name="text"
                            onChange={onCityChange}
                            value={city}
                            id="city"
                            placeholder="City*" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <StyledInputMobile
                          type="select"
                          name="select"
                          onChange={onStateChange}
                          value={state}
                          id="state">
                        {states.map((us_state) => (
                            <option key={us_state}>{us_state}</option>
                        ))}
                      </StyledInputMobile>
                    </Col>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            name="text"
                            onChange={onZipChange}
                            value={zip}
                            id="zip"
                            placeholder="Zip Code*" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><RedTextMobile>{cityError}</RedTextMobile></Row>
                  <Row><RedTextMobile>{stateError}</RedTextMobile></Row>
                  <Row><RedTextMobile>{zipError}</RedTextMobile></Row>
                  <Row>
                    <Col className="d-flex">
                      <StyledTextMobile htmlFor="other">Do you fall into any of these categories?* </StyledTextMobile>
                    </Col>
                  </Row>
                  <IconButtonGroup
                      data={categories}
                      selected={categoryState}
                      toggle={toggleCategories}
                      state="categoryState"
                  />
                  <Row><Col className="d-flex"><RedText>{categoryStateError}</RedText></Col></Row>
                  <Row>
                    <Col className="d-flex">
                      <Text htmlFor="other">OCCUPATION </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="jobtitle"
                            name="jobtitle"
                            onChange={onJobTitleChange}
                            value={jobTitle}
                            id="jobtitle"
                            placeholder="Job Title*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><RedTextMobile>{jobTitleError}</RedTextMobile></Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="employer"
                            name="employer"
                            onChange={onEmployerChange}
                            value={employer}
                            id="employer"
                            placeholder="Employer/Institution*"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row><RedTextMobile>{employerError}</RedTextMobile></Row>
                  <Row>
                    <Col className="d-flex">
                      <StyledTextMobile style={{paddingLeft: "14px"}} htmlFor="other">What industry do you work in?*</StyledTextMobile>
                    </Col>
                  </Row>
                    <IconButtonGroup
                        style={{paddingLeft: "10px"}}
                        data={occupations}
                        selected={industryState}
                        toggle={toggleIndustries}
                        state="industryState"
                    />
                    <Row><RedTextMobile>{industryStateError}</RedTextMobile></Row>
                  <Row>
                    <Col>
                      <StyledTextMobile style={{marginBottom: "10px", marginTop: "21px"}} htmlFor="other">Please provide proof that you are an essential worker*</StyledTextMobile>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <SmallTextMobile style={{width: "74vw", paddingBottom: "0px"}}>Examples: a screenshot of an email from your manager (with a date and name), your last paycheck, screenshots from an employee app (your name must be included in the picture), or any other documentation that will help us verify your status.
                        We must have proof in order to match you with a donor.</SmallTextMobile>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                        <FormGroup>
                          <Input
                              type="file"
                              name="file"
                              id="proofFile"
                              size="sm"
                              style={{
                                padding: "0.2rem 4rem",
                                fontSize: "11px"
                              }}
                              onChange={onProofChange}
                          />
                        </FormGroup>
                    </Col>
                  </Row>
                  <Row><RedTextMobile>{proofError}</RedTextMobile></Row>
                  <Row>
                    <Col className="d-flex">
                      <Text htmlFor="other">OTHER INFO </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <StyledInputMobile
                            type="hear"
                            name="hear"
                            onChange={onReferrerChange}
                            value={referrer}
                            id="hear"
                            placeholder="How did you hear about us?"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <RowFlex>
                    <Container>
                      <StyledButtonMobile style= {{}} onClick={validateSecondPage}>CONTINUE</StyledButtonMobile>
                      <StyledTextMobile style={{fontSize: "12px", fontWeight: "normal"}}>
                        By continuing, you agree to our{' '}
                        <strong>terms and conditions</strong>
                      </StyledTextMobile>
                    </Container>
                  </RowFlex>
                </Form>
              </Container>
          );
        case 2:
          return (
              <Screen style={{ paddingTop: 50 }}>
                <CenteredFlex>
                  <SubtitleMobile style={{fontSize: "17px", fontWeight: "400", color: "#8CC9BA", marginTop: "0px", marginBottom: "5px"}}>Some final disclaimers before we match you!</SubtitleMobile>
                </CenteredFlex>
                <CenteredFlex>
                  <Label check style={{ width: "auto", paddingTop: "2%" }}>
                    <Input style={{marginTop: "10px", marginLeft: "-10px"}} type="checkbox" onChange={onCheck1Change}/>{' '}
                    <SubtitleMobile style={{fontSize: "13px", marginBottom: "1px", fontWeight: "bold"}}>I consent to Give Essential to sharing the information I have provided about my circumstances with my donor.*</SubtitleMobile>
                  </Label>
                  <TextMobile style={{fontWeight: "300", fontSize: "12px", textAlign: "center", paddingTop: "5px"}}>This will help them get a better idea of what types of gifts to send. Company names will be removed, and donors have pledged to only use the information they're given for the sole purpose of sending a gift. In our experience, donors are more likely to send a package when we are allowed to share your story with them</TextMobile>
                </CenteredFlex>
                <CenteredFlex>
                  <Label check style={{ width: "auto", paddingTop: "2%"  }}>
                    <Input style={{marginTop: "10px", marginLeft: "-10px"}} type="checkbox" onChange={onCheck2Change}/>{' '}
                    <SubtitleMobile style={{fontSize: "13px", marginBottom: "1px", fontWeight: "bold"}}>I understand that my donor will receive my first and last name, email address, mailing address, and if I consented, the story that I shared. I understand that these items are publicly sourced from un-vetted individuals, including individuals who themselves may be carrying COVID-19, and take full responsibility for the quality, efficacy, and safety of these donations and their use, and full responsibility for the information I have shared.* </SubtitleMobile>
                  </Label>
                  <TextMobile style={{fontWeight: "300", fontSize: "12px", textAlign: "center", paddingTop: "5px"}}>Give Essential connects people with publicly crowd-sourced donation items to essential workers during this time of critical shortage and inaccessibility. All items are being donated and are provided without any warranty, guarantee, or certification of fitness for purpose. Nothing in this website or in the course of providing these donations establishes a legal obligation or promise on Give Essential's behalf.</TextMobile>
                </CenteredFlex>
                <CenteredFlex>
                  <RedTextMobile>{checkError}</RedTextMobile>
                  <PinkSubmitButtonMobile style={{ marginTop: "8px", fontSize: "13px" }} onClick={validateThirdPage}>
                    <ButtonText>SUBMIT</ButtonText>
                  </PinkSubmitButtonMobile>
                </CenteredFlex>
              </Screen>
          );
        case 3:
          return <EWMatchedPage />;
        default:
          return <p>WIP</p>;
      }
      // if (width > height) {
      // later for horizontal orientation
      // }
    }
    else {
      switch (currentStep) {
        case 0:
          return (
            <Screen style={{ paddingBottom: 10 }}>
              {/*<div>*/}
              {/*  width: {width}; height: {height}*/}
              {/*</div>*/}
              <CenteredFlex>
                <Header>Essential Worker Form</Header>
                <Subtitle>The following questions ask about which items you need.
                  We will pass this information along to your match so that they are able
                  to send an appropriate and helpful gift.</Subtitle>
                <Title>What types of items do you need?*</Title>
                <RowFlex>
                  <ColumnFlex>
                    <CenteredFlex>
                      <IconButtonGroup
                      data={items}
                      selected={itemState}
                      toggle={toggle}
                      state="itemState"
                      />
                      <RedText>{itemStateError}</RedText>
                    </CenteredFlex>
                  </ColumnFlex>
                </RowFlex>
              </CenteredFlex>
              <CenteredFlex>
                <Title>Please specify what types of specific items would be most helpful for you to receive.*</Title>
                <Input
                  style={{ width: "55vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF", height: "15vh" }}
                  type="textarea"
                  name="circumstances"
                  onChange={onItemDescChange}
                  value={itemDesc}
                  placeholder="Please specify products or brands or write N/A if not applicable."
                  />
                <RedText>{itemDescError}</RedText>
              </CenteredFlex>
              <CenteredFlex>
                <Title>Please provide a description of your circumstances so we can better understand what you might need.*</Title>
                <Input
                  style={{ width: "55vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF", height: "15vh" }}
                  type="textarea"
                  name="circumstances"
                  onChange={onCircumstancesChange}
                  value={circumstances}
                  placeholder="Are you a grocery shopper who needs help with gas? Are you a single mother who needs activities for her kids? Feel free to tell us anything about your situation and the items that you need so that we can better help you."
                  />
                <RedText>{circumstancesError}</RedText>
              </CenteredFlex>
              <CenteredFlex>
                <Title>Can we anonymously share your story on Give Essential media?*</Title>
                <Text>We want to share stories to help reach donors. Stories will be completely anonymous on our public media; all personal identification information will be removed (name, company name, address, etc).</Text>
              </CenteredFlex>
              <CenteredFlex>
                <TextButtonGroup
                  data={yesNo}
                  selected={share}
                  toggle={singleSelectToggle}
                  state="share"
                />
              </CenteredFlex>
              <CenteredFlex>
                <Title>Any additional notes or comments?</Title>
                <Input
                  style={{ width: "55vw", color: "#8CC9BA", borderRadius: 10, border: "2px solid #8CC9BA", backgroundColor: "#FFF" }}
                  type="comments"
                  name="comments"
                  onChange={onCommentsChange}
                  value={comments}
                  placeholder="Comments"
                />
        {" "}
                <SubmitButton style={{ marginTop: 40}} onClick={validateFirstPage}>
                  <ButtonText>CONTINUE</ButtonText>
                </SubmitButton>
              </CenteredFlex>
            </Screen>
      );
        case 1:
          return (
            <Container className="hi" style={{ paddingTop: 50, paddingLeft: "12%", paddingRight: "12%" }}>
            <Subtitle>
            The following questions ask for your contact information and about your background. Your contact information is used to facilitate the match. Your background is used to create a more meaningful match between you and your donor — we've found this results in more personalized donations!
            </Subtitle>
            <Form style={{ paddingTop: 10 }} >
              <Text>BASIC INFO</Text>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="name"
                      name="name"
                      onChange={onFirstNameChange}
                      value={firstName}
                      id="setFirstName"
                      placeholder="First Name*"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="name"
                      name="name"
                      onChange={onLastNameChange}
                      value={lastName}
                      id="setLastName"
                      placeholder="Last Name*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row><Col className="d-flex"><RedText>{firstNameError} {lastNameError}</RedText></Col></Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="email"
                      name="email"
                      onChange={onEmailChange}
                      value={email}
                      id="email"
                      placeholder="Email*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row><Col className="d-flex"><RedText>{emailError}</RedText></Col></Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="number"
                      name="number"
                      onChange={onPhoneChange}
                      value={phone}
                      id="phoneNumber"
                      placeholder="Phone Number*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row><RedText>{phoneError}</RedText></Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="mailingaddress"
                      name="mailingaddress"
                      onChange={onStreetChange}
                      value={street}
                      id="mailingAddress"
                      placeholder="Mailing Address*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row><RedText>{streetError}</RedText></Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="mailingaddress2"
                      name="mailingaddress2"
                      onChange={onStreet2Change}
                      value={street2}
                      id="mailingAddress2"
                      placeholder="Mailing Address 2*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      name="text"
                      onChange={onCityChange}
                      value={city}
                      id="city"
                      placeholder="City*" />
                  </FormGroup>
                </Col>
                <Col>
                  <StyledInput
                    type="select"
                    name="select"
                    onChange={onStateChange}
                    value={state}
                    id="state">
                    {states.map((us_state) => (
                      <option key={us_state}>{us_state}</option>
                    ))}
                  </StyledInput>
                </Col>
                <Col>
                  <FormGroup>
                    <StyledInput
                      name="text"
                      onChange={onZipChange}
                      value={zip}
                      id="zip"
                      placeholder="Zip Code*" />
                  </FormGroup>
                </Col>
              </Row>
              <Row><RedText>{cityError}</RedText></Row>
              <Row><RedText>{stateError}</RedText></Row>
              <Row><RedText>{zipError}</RedText></Row>
              <Row>
                <Col className="d-flex">
                  <StyledText htmlFor="other">Do you fall into any of these categories?* </StyledText>
                </Col>
              </Row>
              <IconButtonGroup
                      data={categories}
                      selected={categoryState}
                      toggle={toggleCategories}
                      state="categoryState"
                    />
              <Row><Col className="d-flex"><RedText>{categoryStateError}</RedText></Col></Row>
              <Row>
                <Col className="d-flex">
                  <Text htmlFor="other">OCCUPATION </Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="jobtitle"
                      name="jobtitle"
                      onChange={onJobTitleChange}
                      value={jobTitle}
                      id="jobtitle"
                      placeholder="Job Title*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row><RedText>{jobTitleError}</RedText></Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="employer"
                      name="employer"
                      onChange={onEmployerChange}
                      value={employer}
                      id="employer"
                      placeholder="Employer/Institution*"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row><RedText>{employerError}</RedText></Row>
              <Row>
                <Col className="d-flex">
                  <StyledText htmlFor="other">What industry do you work in?*</StyledText>
                </Col>
              </Row>
                <IconButtonGroup
                      data={occupations}
                      selected={industryState}
                      toggle={toggleIndustries}
                      state="industryState"
                    />
              <Row><RedText>{industryStateError}</RedText></Row>
              <Row>
                <Col>
                  <StyledText htmlFor="other">Please provide proof that you are an essential worker*</StyledText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <SmallText>Examples: a screenshot of an email from your manager (with a date and name), your last paycheck, screenshots from an employee app (your name must be included in the picture), or any other documentation that will help us verify your status.
                      We must have proof in order to match you with a donor.</SmallText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Input
                      type="file"
                      name="file"
                      id="proofFile"
                      style={{fontFamily: "Montserrat"}}
                      onChange={onProofChange}
                      />
                  </FormGroup>
                </Col>
              </Row>
              <Row><RedText>{proofError}</RedText></Row>
              <Row>
                <Col className="d-flex">
                  <Text htmlFor="other">OTHER INFO </Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <StyledInput
                      type="hear"
                      name="hear"
                      onChange={onReferrerChange}
                      value={referrer}
                      id="hear"
                      placeholder="How did you hear about us?"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <RowFlex>
                <Container>
                  <StyledButton onClick={validateSecondPage}>CONTINUE</StyledButton>
                  <StyledText>
                    By continuing, you agree to our{' '}
                    <strong>terms and conditions</strong>
                  </StyledText>
                </Container>
              </RowFlex>
            </Form>
          </Container>
        );
        case 2:
          return (
            <Screen style={{ paddingTop: 50 }}>
            <CenteredFlex>
              <Subtitle>Some final disclaimers before we match you!</Subtitle>
            </CenteredFlex>
            <CenteredFlex>
              <Label check style={{ width: "55vw", paddingTop: "2%" }}>
                <Input type="checkbox" onChange={onCheck1Change}/>{' '}
                <b>I consent to Give Essential to sharing the information I have provided about my circumstances with my donor.*</b>
              </Label>
              <Text>This will help them get a better idea of what types of gifts to send. Company names will be removed, and donors have pledged to only use the information they're given for the sole purpose of sending a gift. In our experience, donors are more likely to send a package when we are allowed to share your story with them</Text>
            </CenteredFlex>
            <CenteredFlex>
              <Label check style={{ width: "55vw", paddingTop: "2%"  }}>
                <Input type="checkbox" onChange={onCheck2Change}/>{' '}
                <b>I understand that my donor will receive my first and last name, email address, mailing address, and if I consented, the story that I shared. I understand that these items are publicly sourced from un-vetted individuals, including individuals who themselves may be carrying COVID-19, and take full responsibility for the quality, efficacy, and safety of these donations and their use, and full responsibility for the information I have shared.* </b>
              </Label>
              <Text>Give Essential connects people with publicly crowd-sourced donation items to essential workers during this time of critical shortage and inaccessibility. All items are being donated and are provided without any warranty, guarantee, or certification of fitness for purpose. Nothing in this website or in the course of providing these donations establishes a legal obligation or promise on Give Essential's behalf.</Text>
            </CenteredFlex>
            <CenteredFlex>
              <RedText>{checkError}</RedText>
              <PinkSubmitButton style={{ marginTop: 40 }} onClick={validateThirdPage}>
                <ButtonText>SUBMIT</ButtonText>
              </PinkSubmitButton>
            </CenteredFlex>
          </Screen>
          );
        case 3:
          return <EWMatchedPage />;
        default:
          return <p>WIP</p>;
      }
    }

  };
  
  return (
    <Screen style={{ paddingBottom: 50 }}>
      <form>
        {renderStep()}
      </form>
    </Screen>
  );
}
