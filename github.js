class Github {
  constructor(){
    this.client_id = 'd2671cc9f7ffae683782';
    this.client_secret = '043d5ee0233ec0e440c8887cb527217ebce76ad5';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      profile
    }
  }
}

