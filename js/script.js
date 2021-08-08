
const loadMeals = () =>{
    const searchInput = document.getElementById("searchInput").value;
    console.log(searchInput);

    if(searchInput == ""){
        document.getElementById("meal-details").innerHTML=`
            <span style="font-size:35px; font-weight:bold; text-align:center; display:block; padding: 25px 0;">Enter a meal name.</span>
        `;
    }else{     
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        console.log(url);
        fetch(url)
        .then( res => res.json())
        .then( data => displayMeals(data.meals))
        .catch(err => function() {
            console.log(err);
        });
    }
}

const displayMeals = (meals) =>{
    console.log(meals);
    document.getElementById("meals-container").innerHTML="";
    document.getElementById("meal-details").innerHTML="";
    if(meals == null){
        document.getElementById("meal-details").innerHTML=`
            <span style="font-size:35px; font-weight:bold; text-align:center; display:block; padding: 25px 0;">This meal is not available.</span>
        `;
    }

    meals.forEach(meal => {
        console.log(meal);
        const {strArea, strCategory, strInstructions, strMeal, strMealThumb,strTags,strYoutube} = meal;
        const {strIngredient1:ing1, strIngredient2:ing2, strIngredient3:ing3, strIngredient4:ing4, strIngredient5:ing5,strIngredient6:ing6,strIngredient7:ing7,strIngredient8:ing8,strIngredient9:ing9,strIngredient10:ing10,strIngredient11:ing11,strIngredient12:ing12,strIngredient13:ing13,strIngredient14:ing14,strIngredient15:ing15,strIngredient16:ing16,strIngredient17:ing17,strIngredient18:ing18,strIngredient19:ing19,strIngredient20:ing20} = meal;

        const mealsContainer = document.getElementById("meals-container");

        const mealContent = document.createElement("div");
        mealContent.classList.add("col-md-3","meal-content");
        
        const content = document.createElement("div");
        content.classList.add("content");
        content.setAttribute("id", "content");;
        mealContent.appendChild(content); 

        const mealImage = document.createElement("img");
        mealImage.src = strMealThumb;
        content.appendChild(mealImage);

        const mealName = document.createElement("h2");
        mealName.innerText = strMeal;
        content.appendChild(mealName);

        mealsContainer.appendChild(mealContent);

        mealName.addEventListener('click',function(){
            

            const mealDetails = document.getElementById("meal-details");
            mealDetails.innerHTML = `
                <div class="row">
                    <div class="mealImage col-md-5">
                        <img src="${strMealThumb}">
                    </div>
                    <div class="mealInfo col-md-7">
                        <h2>${strMeal}</h2>
                        <h4>Ingredients:</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <ul id="ingredients" class="ingredients">
                                    <li>${meal.strMeasure1} ${ing1}</li>
                                    <li>${meal.strMeasure2} ${ing2}</li>
                                    <li>${meal.strMeasure3} ${ing3}</li>
                                    <li>${meal.strMeasure4} ${ing4}</li>
                                    <li>${meal.strMeasure5} ${ing5}</li>
                                    <li>${meal.strMeasure6} ${ing6}</li>
                                    <li>${meal.strMeasure7} ${ing7}</li>
                                    <li>${meal.strMeasure8} ${ing8}</li>
                                    <li>${meal.strMeasure9} ${ing9}</li>
                                    <li>${meal.strMeasure10} ${ing10}</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul id="ingredients" class="ingredients">
                                    <li>${meal.strMeasure11} ${ing11}</li>
                                    <li>${meal.strMeasure12} ${ing12}</li>
                                    <li>${meal.strMeasure13} ${ing13}</li>
                                    <li>${meal.strMeasure14} ${ing14}</li>
                                    <li>${meal.strMeasure15} ${ing15}</li>
                                    <li>${meal.strMeasure16} ${ing16}</li>
                                    <li>${meal.strMeasure17} ${ing17}</li>
                                    <li>${meal.strMeasure18} ${ing18}</li>
                                    <li>${meal.strMeasure19} ${ing19}</li>
                                    <li>${meal.strMeasure20} ${ing20}</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div class="mealInstructions col-md-12">
                        <h4>Instructions: </h4>
                        <p>${strInstructions}</p>
                    </p>
                </div>
            `;

            const ingredients = document.getElementById("ingredients");
         
        });
    });
}

