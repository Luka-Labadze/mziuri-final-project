import "react";
import { useLoader } from "../context/LoaderContext";
import { useEffect, useState } from "react";
import { useCartWishlist } from "../context/CartWishlistContext";

function Checkout() {
  const { useFakeLoader } = useLoader();
  const { cart } = useCartWishlist();
  const subtotal = cart.reduce((sum, item) => sum + Number(item.price), 0);
  useEffect(() => {
    if (useFakeLoader) useFakeLoader();
  }, [useFakeLoader]);

  const [errors, setErrors] = useState({
    emailOrNumber: "",
    lastname: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const [data, setData] = useState({
    emailOrNumber: "",
    lastname: "",
    address: "",
    postalCode: "",
    city: "",
    firstName: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form data:", data);
    }
  };

  const validate = () => {
    const errors = {};

    if (!data.emailOrNumber.trim()) {
      errors.emailOrNumber = "Enter an email or phone number";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        data.emailOrNumber,
      ) &&
      !/^\d+$/.test(data.emailOrNumber)
    ) {
      errors.emailOrNumber =
        "Enter a valid email address or numeric phone number";
    }

    if (!data.address.trim()) {
      errors.address = "Enter an Address";
    } else if (data.address.length < 4) {
      errors.address = "Enter correct address (at least 4 characters)";
    }

    if (!data.city.trim()) {
      errors.city = "Enter a city";
    } else if (data.city.length < 2) {
      errors.city = "Enter correct city (at least 2 characters)";
    }

    if (!data.postalCode.trim()) {
      errors.postalCode = "Enter a ZIP / postal code";
    } else if (data.postalCode.length < 2) {
      errors.postalCode = "Enter correct Postal code (at least 2 characters)";
    }

    if (!data.lastname.trim()) {
      errors.lastname = "lastname field is required";
    } else if (data.lastname.length < 4) {
      errors.lastname = "lastname must be at least 4 characters long";
    } else if (data.lastname.length > 20) {
      errors.lastname = "lastname must be less than 20 characters long";
    } else if (data.lastname.includes(" ")) {
      errors.lastname = "lastname must not contain spaces";
    } else if (!/^[a-zA-Z0-9]+$/.test(data.lastname)) {
      errors.lastname = "lastname must contain only letters and digits";
    } else if (!/[a-zA-Z]/.test(data.lastname)) {
      errors.lastname = "lastname must contain at least one letter";
    }

    return errors;
  };

  return (
    <div className="checkout">
      <div className="checkoutWrapper">
        <form className="checkoutForm" onSubmit={handelSubmit}>
          <div className="contactSection">
            <div className="contactLabelSection">
              <h2 className="contactTitle">Contact</h2>
              <p>Sign in</p>
            </div>
            <div className="checkoutContactInputSection">
              <input
                type="text"
                name="emailOrNumber"
                className="checkoutContactInput"
                placeholder="Email or mobile phone number"
                value={data.emailOrNumber}
                onChange={handleChange}
              />
              {errors.emailOrNumber && (
                <p className="checkoutErrorMsg" style={{ marginTop: "15px" }}>
                  {errors.emailOrNumber}
                </p>
              )}
              <input
                type="checkbox"
                name="checkoutCheckbox"
                className="checkoutCheckbox"
                id="checkoutCheckboxFocus"
              />
              <label htmlFor="checkoutCheckboxFocus" id="checkoutCheckboxLabel">
                Email me with news and offers
              </label>
            </div>
          </div>

          <div className="DeliverySection">
            <h2 className="deliveryTitle">Delivery</h2>

            <div className="dropdownContainer">
              <label htmlFor="country" className="inputLabel">
                Country/Region
              </label>
              <select id="country" className="inputField" required>
                <option value="AX">Åland Islands</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AG">Antigua &amp; Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AC">Ascension Island</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia &amp; Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="VG">British Virgin Islands</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="BQ">Caribbean Netherlands</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo - Brazzaville</option>
                <option value="CD">Congo - Kinshasa</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czechia</option>
                <option value="CI">Côte dIvoire</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="SZ">Eswatini</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong SAR</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao SAR</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar (Burma)</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PS">Palestinian Territories</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn Islands</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">São Tomé &amp; Príncipe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia &amp; South Sandwich Islands
                </option>
                <option value="KR">South Korea</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="BL">St. Barthélemy</option>
                <option value="SH">St. Helena</option>
                <option value="KN">St. Kitts &amp; Nevis</option>
                <option value="LC">St. Lucia</option>
                <option value="MF">St. Martin</option>
                <option value="PM">St. Pierre &amp; Miquelon</option>
                <option value="VC">St. Vincent &amp; Grenadines</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard &amp; Jan Mayen</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad &amp; Tobago</option>
                <option value="TA">Tristan da Cunha</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Türkiye</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks &amp; Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UM">U.S. Outlying Islands</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="WF">Wallis &amp; Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>

            <div className="nameWrapper">
              <input
                type="text"
                className="DSfirstName"
                placeholder="First name (optional)"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                className="DSlastName"
                placeholder="Last name"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
            {errors.lastname && (
              <p className="checkoutErrorMsg" style={{ marginBottom: "15px" }}>
                {errors.lastname}
              </p>
            )}
            <input
              type="text"
              placeholder="Apartament, suite, etc. (optional)"
              className="DSAddress"
              name="address"
              value={data.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="checkoutErrorMsg" style={{ marginTop: "15px" }}>
                {errors.address}
              </p>
            )}
            <div className="postalWrapper">
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className="postalInputs"
                value={data.postalCode}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="postalInputs"
                value={data.city}
                onChange={handleChange}
              />
            </div>
            {(errors.postalCode || errors.city) && (
              <p className="checkoutErrorMsg" style={{ marginBottom: "15px" }}>
                {errors.postalCode || errors.city}
              </p>
            )}
            <div className="infoSaveWrapper">
              <input
                type="checkbox"
                name="checkbox"
                id="ISCheckbox"
                className="InfoSaveCheckbox"
              />
              <label htmlFor="ISCheckbox" id="ISCheckboxFocus">
                Save this information for next time
              </label>
            </div>
          </div>

          <div className="shippingMethodSection">
            <h2 className="shippingTitle">Shipping Method</h2>
            <ul className="shippingWrapper">
              <li className="shippingLabels">International Shipping</li>
              <li className="shippingLabels">20,00 $</li>
            </ul>
          </div>

          <div className="paymentSection">
            <h2 className="paymentTitle">Payment</h2>
            <p className="securedPayment">
              All transactions are secure and encrypted.
            </p>
            <ul className="paymentWrapper">
              <li className="paymentLabels">Cash on Delivery (COD)</li>
            </ul>
          </div>

          <div className="billingAddressSection">
            <h2 className="BATitle">Billing Address</h2>
            <div className="billingAddressWrapper">
              <div className="sameAddressShipping">
                <input
                  type="radio"
                  className="sameAddressRadio"
                  id="SASRadio"
                  name="billingAddress"
                  defaultChecked
                />
                <label htmlFor="SASRadio">Same as shipping address</label>
              </div>

              <div className="differentAddressShipping">
                <input
                  type="radio"
                  className="differentAddressRadio"
                  id="DASRadio"
                  name="billingAddress"
                />
                <label htmlFor="DASRadio">
                  Use a different billing address
                </label>
              </div>
            </div>
          </div>

          <button className="CompleteOrderBtn" type="submit">
            Complete Order
          </button>
        </form>
        <div className="orderSummarySection">
  <ul className="orderSummaryList">
    {cart.map((item) => (
      <li key={item._id} className="orderSummaryItem">
        <div className="orderSummaryImageWrapper">
          <img
            src={item.image1}
            alt={item.title}
            className="orderSummaryImage"
          />
          <span className="orderSummaryQtyBadge">1</span>
        </div>
        <div className="orderSummaryInfo">
          <span className="orderSummaryTitle">{item.title}</span>
          {(item.size || item.color || item.material) && (
            <span className="orderSummaryVariant">
              {[item.size, item.color, item.material]
                .filter(Boolean)
                .join(" / ")}
            </span>
          )}
        </div>
        <div className="orderSummaryPrice">
          {Number(item.price).toFixed(2)} $
        </div>
      </li>
    ))}
  </ul>

  <div className="orderSummaryTotals">
    <div className="orderSummaryRow">
      <span>Subtotal</span>
      <span>{subtotal.toFixed(2)} $</span>
    </div>
    <div className="orderSummaryRow">
      <span>Shipping</span>
      <span className="orderSummaryShippingPlaceholder">
        Calculated at next step
      </span>
    </div>
    <div className="orderSummaryRow orderSummaryTotalRow">
      <span>Total</span>
      <span>
        <span className="currencyLabel">USD</span> {subtotal.toFixed(2)} $
      </span>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Checkout;
