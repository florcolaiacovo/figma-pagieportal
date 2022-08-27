import React from 'react'
import styles from './Component1.module.scss'
import Blue from '../../elements/Blue.svg'
import User from '../../elements/User.svg'
import Card from '../../elements/Card.svg'

export default function Component1() {
  return (
    <div className={`${styles.father} col-2`}>
      <div 
      
      className={styles.box1}>
        <img src={Blue}
            className={`${styles.logo}`}></img>
      </div>

      {/*cominza box 2*/}
      <div className={styles.box2}>
        <div className={styles.item1}>
            <svg className={styles.icon1}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9962 0C16.731 0 16.4767 0.105357 16.2892 0.292893C16.1017 0.48043 15.9964 0.734784 15.9964 1C15.9964 3.949 13.414 5 10.9975 5H3.9991C2.93847 5 1.92128 5.42143 1.17131 6.17157C0.421332 6.92172 0 7.93913 0 9V11C0.00218367 11.5987 0.13943 12.1893 0.401512 12.7276C0.663593 13.2659 1.04375 13.7381 1.51366 14.109L5.08485 22.081C5.33883 22.6521 5.75287 23.1373 6.27685 23.4779C6.80083 23.8185 7.41228 23.9998 8.03718 24C8.53438 23.9997 9.02361 23.875 9.46033 23.6373C9.89705 23.3996 10.2674 23.0564 10.5377 22.639C10.8079 22.2215 10.9695 21.7431 11.0078 21.2473C11.046 20.7515 10.9597 20.2539 10.7566 19.8L8.55707 15H10.9975C13.414 15 15.9964 16.051 15.9964 19C15.9964 19.2652 16.1017 19.5196 16.2892 19.7071C16.4767 19.8946 16.731 20 16.9962 20C17.2613 20 17.5156 19.8946 17.7031 19.7071C17.8906 19.5196 17.9959 19.2652 17.9959 19V1C17.9959 0.734784 17.8906 0.48043 17.7031 0.292893C17.5156 0.105357 17.2613 0 16.9962 0ZM8.93498 20.619C9.0012 20.7686 9.02905 20.9323 9.01601 21.0954C9.00296 21.2585 8.94943 21.4157 8.86027 21.5529C8.77111 21.69 8.64914 21.8027 8.50541 21.8808C8.36168 21.9589 8.20074 21.9999 8.03718 22C7.79863 21.9998 7.56526 21.9304 7.36542 21.8001C7.16558 21.6698 7.00787 21.4842 6.91144 21.266L4.10407 15H6.35756L8.93498 20.619ZM15.9964 14.6C14.568 13.4992 12.7995 12.9331 10.9975 13H3.9991C3.46878 13 2.96019 12.7893 2.5852 12.4142C2.21021 12.0391 1.99955 11.5304 1.99955 11V9C1.99955 8.46957 2.21021 7.96086 2.5852 7.58579C2.96019 7.21071 3.46878 7 3.9991 7H10.9975C12.7989 7.0683 14.5673 6.50403 15.9964 5.405V14.6ZM23.8946 15.452C23.836 15.5696 23.7547 15.6744 23.6555 15.7606C23.5564 15.8467 23.4412 15.9125 23.3166 15.9541C23.192 15.9957 23.0604 16.0123 22.9294 16.0031C22.7983 15.9938 22.6704 15.9588 22.5529 15.9L20.5534 14.9C20.316 14.7814 20.1355 14.5735 20.0515 14.3218C19.9675 14.0701 19.9869 13.7954 20.1055 13.558C20.224 13.3206 20.4319 13.1401 20.6835 13.0561C20.9352 12.972 21.2098 12.9914 21.4472 13.11L23.4467 14.11C23.6828 14.2285 23.8624 14.4356 23.9463 14.6861C24.0303 14.9366 24.0117 15.2102 23.8946 15.447V15.452ZM20.1055 6.452C20.0467 6.33448 20.0117 6.20653 20.0024 6.07546C19.9931 5.9444 20.0098 5.81279 20.0514 5.68816C20.093 5.56353 20.1587 5.44832 20.2448 5.34912C20.331 5.24991 20.4358 5.16866 20.5534 5.11L22.5529 4.11C22.7902 3.99145 23.0649 3.97205 23.3165 4.05606C23.5681 4.14008 23.7761 4.32063 23.8946 4.558C24.0131 4.79537 24.0325 5.07011 23.9485 5.32178C23.8645 5.57346 23.684 5.78145 23.4467 5.9L21.4472 6.9C21.3297 6.95876 21.2017 6.99378 21.0707 7.00306C20.9397 7.01234 20.8081 6.99571 20.6835 6.9541C20.5589 6.9125 20.4437 6.84674 20.3445 6.76058C20.2453 6.67443 20.1641 6.56957 20.1055 6.452ZM19.9955 10C19.9955 9.73478 20.1008 9.48043 20.2883 9.29289C20.4758 9.10536 20.7301 9 20.9953 9H22.9948C23.26 9 23.5143 9.10536 23.7018 9.29289C23.8892 9.48043 23.9946 9.73478 23.9946 10C23.9946 10.2652 23.8892 10.5196 23.7018 10.7071C23.5143 10.8946 23.26 11 22.9948 11H20.9953C20.7301 11 20.4758 10.8946 20.2883 10.7071C20.1008 10.5196 19.9955 10.2652 19.9955 10Z" fill="white"/>
                </svg>
            <h3 className={styles.title1}>Advertisements</h3>
        </div>
        <div className={styles.items}>
          <svg className={styles.itemBlack}
              width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.249 16.1979L19.708 6.83049C19.1654 4.82667 17.9831 3.06606 16.3492 1.82887C14.7153 0.591687 12.7238 -0.0509783 10.6917 0.00316084C8.65947 0.0573 6.70338 0.805132 5.1347 2.12764C3.56603 3.45014 2.47493 5.27132 2.03504 7.30131L0.0696471 16.3479C-0.0254536 16.7862 -0.0231339 17.2407 0.0764349 17.6779C0.176004 18.1152 0.370281 18.524 0.644933 18.8741C0.919585 19.2243 1.2676 19.507 1.66331 19.7012C2.05902 19.8955 2.49232 19.9964 2.93125 19.9965H6.45645C6.68076 21.1264 7.28007 22.1422 8.15283 22.8718C9.02559 23.6014 10.1181 24 11.2453 24C12.3725 24 13.4651 23.6014 14.3378 22.8718C15.2106 22.1422 15.8099 21.1264 16.0342 19.9965H19.4255C19.8772 19.9963 20.3226 19.8894 20.7272 19.6841C21.1318 19.4788 21.4845 19.1807 21.7579 18.813C22.0313 18.4453 22.218 18.018 22.3033 17.5644C22.3887 17.1108 22.3704 16.6432 22.25 16.1979H22.249ZM11.2453 21.9957C10.6411 21.9932 10.0524 21.7997 9.55975 21.4419C9.06711 21.084 8.6946 20.5792 8.49319 19.9965H13.9975C13.7961 20.5792 13.4236 21.084 12.9309 21.4419C12.4383 21.7997 11.8496 21.9932 11.2453 21.9957ZM20.2025 17.6024C20.1113 17.726 19.9931 17.8261 19.8574 17.8947C19.7216 17.9633 19.572 17.9984 19.4206 17.9973H2.93125C2.78491 17.9972 2.64044 17.9636 2.5085 17.8988C2.37657 17.8341 2.26055 17.7398 2.16899 17.623C2.07743 17.5063 2.01268 17.37 1.97952 17.2242C1.94636 17.0784 1.94563 16.9268 1.97738 16.7807L3.94278 7.73415C4.2891 6.14096 5.14616 4.7119 6.37774 3.67414C7.60931 2.63637 9.1447 2.04947 10.7398 2.00673C12.335 1.96399 13.8983 2.46786 15.1813 3.43824C16.4643 4.40863 17.3934 5.78983 17.8208 7.36229L20.3618 16.7297C20.4033 16.8779 20.4105 17.0338 20.3829 17.1853C20.3552 17.3368 20.2935 17.4796 20.2025 17.6024Z" fill="#001A24"/>
              </svg>
          <h3 className={styles.titleBlack}>Notifications</h3>
        </div>

        <div className={styles.items}>
          <svg className={styles.itemBlack}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 16.0002V21.0001C24 21.7957 23.6839 22.5588 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H16C14.5971 23.9986 13.2192 23.6282 12.0047 22.9262C10.7901 22.2241 9.78145 21.215 9.08 20.0001C9.83387 19.9947 10.5852 19.9116 11.322 19.7521C11.8832 20.4537 12.595 21.0201 13.4048 21.4092C14.2146 21.7984 15.1016 22.0003 16 22.0001H21C21.2652 22.0001 21.5196 21.8947 21.7071 21.7072C21.8946 21.5196 22 21.2653 22 21.0001V16.0002C21.9998 15.1015 21.7972 14.2143 21.4074 13.4045C21.0175 12.5947 20.4504 11.8831 19.748 11.3223C19.9088 10.5857 19.9933 9.83438 20 9.08039C21.215 9.78182 22.2241 10.7904 22.9262 12.005C23.6282 13.2195 23.9986 14.5973 24 16.0002ZM17.977 9.65137C18.0705 8.36304 17.8856 7.06968 17.4348 5.85917C16.9841 4.64865 16.278 3.54935 15.3646 2.63597C14.4512 1.72259 13.3519 1.01653 12.1413 0.565764C10.9308 0.115 9.63736 -0.0699025 8.349 0.0236207C6.06592 0.284346 3.95693 1.37076 2.41918 3.07828C0.881427 4.78581 0.0210272 6.99661 0 9.29438V14.3343C0 16.8662 1.507 18.0002 3 18.0002H8.7C10.9988 17.9804 13.211 17.1206 14.9198 15.5828C16.6286 14.045 17.7159 11.9353 17.977 9.65137ZM13.95 4.05152C14.6599 4.763 15.2088 5.61867 15.5593 6.56064C15.9099 7.5026 16.054 8.50888 15.982 9.51138C15.7686 11.295 14.9105 12.9391 13.5693 14.1342C12.2282 15.3293 10.4964 15.9929 8.7 16.0002H3C2.072 16.0002 2 14.7252 2 14.3343V9.29438C2.00834 7.4988 2.67265 5.76818 3.86792 4.42818C5.06319 3.08819 6.70699 2.23123 8.49 2.01857C8.656 2.00657 8.822 2.00057 8.988 2.00057C9.90927 1.99971 10.8217 2.1804 11.6731 2.53231C12.5245 2.88423 13.2982 3.40046 13.95 4.05152Z" fill="#001A24"/>
                </svg>
          <h3 className={styles.titleBlack}>Inbox</h3>
        </div>

        <div className={`${styles.items} ${styles.lastItem}`}>
          <img src={User} alt="user"></img>
          <h3 className={styles.titleBlack}>Profile</h3>
        </div>

        {/*aca termina box 2*/}

        <img src={Card} className={styles.line}></img>
        

        <div className={`${styles.items} ${styles.lastItem}`}>
          <svg className={styles.itemBlack}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2818 15C11.021 15 10.771 15.1054 10.5866 15.2929C10.4023 15.4804 10.2987 15.7348 10.2987 16V19C10.2987 19.7957 9.98796 20.5587 9.43488 21.1213C8.88179 21.6839 8.13164 22 7.34946 22H4.91537C4.13319 22 3.38304 21.6839 2.82996 21.1213C2.27687 20.5587 1.96615 19.7957 1.96615 19V5C1.96615 4.20435 2.27687 3.44129 2.82996 2.87868C3.38304 2.31607 4.13319 2 4.91537 2H7.34946C8.13164 2 8.88179 2.31607 9.43488 2.87868C9.98796 3.44129 10.2987 4.20435 10.2987 5V8C10.2987 8.26522 10.4023 8.51957 10.5866 8.70711C10.771 8.89464 11.021 9 11.2818 9C11.5425 9 11.7925 8.89464 11.9769 8.70711C12.1613 8.51957 12.2648 8.26522 12.2648 8V5C12.2633 3.67441 11.7449 2.40356 10.8234 1.46622C9.90196 0.528882 8.65262 0.00158786 7.34946 0H4.91537C3.61221 0.00158786 2.36288 0.528882 1.4414 1.46622C0.51993 2.40356 0.00156098 3.67441 0 5V19C0.00156098 20.3256 0.51993 21.5964 1.4414 22.5338C2.36288 23.4711 3.61221 23.9984 4.91537 24H7.34946C8.65262 23.9984 9.90196 23.4711 10.8234 22.5338C11.7449 21.5964 12.2633 20.3256 12.2648 19V16C12.2648 15.7348 12.1613 15.4804 11.9769 15.2929C11.7925 15.1054 11.5425 15 11.2818 15Z" fill="#001A24"/>
            <path d="M22.48 9.879L17.9716 5.293C17.8809 5.19749 17.7724 5.12131 17.6525 5.0689C17.5325 5.01649 17.4035 4.9889 17.273 4.98775C17.1425 4.9866 17.013 5.0119 16.8922 5.06218C16.7714 5.11246 16.6616 5.18671 16.5693 5.2806C16.477 5.3745 16.404 5.48615 16.3546 5.60905C16.3052 5.73194 16.2803 5.86362 16.2814 5.9964C16.2826 6.12918 16.3097 6.2604 16.3612 6.3824C16.4127 6.50441 16.4876 6.61475 16.5815 6.707L20.7724 10.97L5.89844 11C5.63772 11 5.38767 11.1054 5.20331 11.2929C5.01894 11.4804 4.91537 11.7348 4.91537 12C4.91537 12.2652 5.01894 12.5196 5.20331 12.7071C5.38767 12.8946 5.63772 13 5.89844 13L20.8294 12.97L16.5795 17.293C16.4856 17.3852 16.4108 17.4956 16.3592 17.6176C16.3077 17.7396 16.2806 17.8708 16.2795 18.0036C16.2783 18.1364 16.3032 18.2681 16.3526 18.391C16.4021 18.5138 16.4751 18.6255 16.5674 18.7194C16.6597 18.8133 16.7694 18.8875 16.8902 18.9378C17.0111 18.9881 17.1405 19.0134 17.271 19.0123C17.4016 19.0111 17.5306 18.9835 17.6505 18.9311C17.7704 18.8787 17.8789 18.8025 17.9696 18.707L22.478 14.121C23.0311 13.5587 23.3421 12.7959 23.3425 12.0004C23.3428 11.2049 23.0326 10.4418 22.48 9.879Z" fill="#001A24"/>
            </svg>

          <h3 className={styles.titleBlack}>Log Out</h3>
        </div>
      </div>
    </div>
  )
}