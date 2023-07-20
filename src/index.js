import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const validator = new JustValidate('#basic_form');
const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  }
  });
  const title=document.getElementById('a');
  const titleText='スライド'+swiper.realIndex+'を表示しています';
  let text=document.createTextNode(titleText);
  title.appendChild(text);

  
swiper.on('slideChange', function () {
  console.log(swiper.realIndex);
  if(text){
    text.remove();
  }
  const titleText='スライド'+swiper.realIndex+'を表示しています';
  text=document.createTextNode(titleText);
  title.appendChild(text);
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  }
  });
  const titlelist=[
    '一つ目',
    '二つ目',
    '三つ目',
    '四つ目',

  ]
  const title2=document.getElementById('b');
  const titleText2=titlelist[swiper2.realIndex]
  let text2=document.createTextNode(titleText2);
  title2.appendChild(text2);


swiper2.on('slideChange', function () {
  console.log(swiper2.realIndex);
  if(text2){
    text2.remove();
  }
  const titleText2=titlelist[swiper2.realIndex]
  text2=document.createTextNode(titleText2);
  title2.appendChild(text2);
});

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage:'必須入力です',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage:"3文字以上入力してね",
    },
    {
      rule: 'maxLength',
      errorMessage:"15文字以内で入力してね",
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])

  .addField('#basic_password', [
    {
      rule: 'required',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField("#live",[
	{
		rule:'required',
	},
  ])
  // .onSuccess(onSubmint);

  // function onSubmint(event){
  //   let formData = new FormData(event.target);
  //   console.log(formData.get("name"));
  //   console.log(formData.get("email"));
  //   console.log(formData.get("password"));
  //   console.log(formData.get("old"));
  //   console.log(formData.get("live"));
  // }