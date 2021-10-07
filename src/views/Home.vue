<template>
  <div class="home">
    <div class="profile">
      <h2>Adharsh C S</h2>
      <div class="data">
        <div class="clg">
          <h3>College Details</h3>
          <div class="sep"></div>
          <ProfileField label="Register Number" value="111420243013"/>
          
          <div class="sep"></div>
          <ProfileField label="Enrollment Year" value="2020-2024" />
          
          <div class="sep"></div>
          <ProfileField label="Department Code" value="A120008" />
          
          <div class="sep"></div>
          <ProfileField label="Boarding Point" value="Thirumullaivoyal" />
          
          <div class="sep"></div>
          <ProfileField label="Bus Number" value="09" />
          
          <div class="sep"></div>
          <ProfileField label="Food" value="Lunch Only" />
          
          <!-- <div class="sep"></div> -->
        </div>
        <div class="clg">
          <h3>Personal Details</h3>
          <div class="sep"></div>
          <ProfileField label="Date Of Birth" value="03/09/2002" />
          
          <div class="sep"></div>
          <ProfileField label="Blood Group" value="B+ve" />
          
          <div class="sep"></div>
          <ProfileField label="Permanent Addres" value="Krishnakripa, Mullai apts, Thirumullaivoyal, 11th St, Chennai - 62" :big="true"/>
          
          <div class="sep"></div>
          <ProfileField label="Boarding Point" value="Thirumullaivoyal" />
          
          <div class="sep"></div>
          <ProfileField label="Bus Number" value="Thirumullaivoyal" />
          
          <div class="sep"></div>
          <ProfileField label="Emergency Contact" value="K K Sajith" />

          <div class="sep"></div>
          <ProfileField label="Emergency Number" value="9444555522" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ProfileField from "@/components/ProfileField.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ProfileField,
  },
};
</script>

<style scoped lang="less">
.sep {
  background: #363636;
  width: 80%;
  min-height: 2px;
  height: 2px;
  margin: 2px 0;
}

.home {
  width: 100%;
  height: 100%;
  background: rgb(14, 0, 255);
  background: linear-gradient(
    45deg,
    rgba(14, 0, 255, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;

  .profile {
    width: 90%;
    height: 90%;

    background: #ffffff;

    border-radius: 8px;
    margin: 0 10px;
    display: flex;

    align-items: center;
    // justify-content: space-around;
    flex-direction: column;
    // color: white;

    h2 {
      width: calc(100% - 40px);
      height: 100px;
      background: #1f0029;
      border-radius: 8px 8px 0 0;
      display: flex;
      padding: 0 20px;
      align-items: center;
      font-size: 44px;
      color: white;
    }

    .data {
      width: 100%;
      height: calc(100% - 100px);
      overflow: auto;
      display: flex;
      .clg {
        width: 100%;
        height: 550px ;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
          width: 80%;
          text-align: left;
          font-size: 30px;
          margin: 5px 0;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
