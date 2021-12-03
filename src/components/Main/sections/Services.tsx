import React from 'react';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function Services() {
  return (
    <section className="services section container" id="services">
      <ScrollRevealAnimation timing="0.5">
        <span className="section-subtitle">Offering</span>
        <h2 className="section-title">Our amazing services</h2>
      </ScrollRevealAnimation>

      <div className="services__container d-grid">
        <div className="services__content">
          <svg className="services__img" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M45.3205 21.5702L44.6357 19.3163C43.7659 16.756 40.9852 15.3857 38.4249
                      16.2556C36.9847 16.7449 35.8536 17.876 35.3643 19.3163L34.6795 21.5702C34.1032
                      23.471 33.9823 25.4807 34.3264 27.4368C34.6403 29.0838 35.6859 30.4987 37.168
                      31.2822L36.4011 48.4267C36.2984 49.3836 36.6088 50.339 37.2544 51.0528C38.6428
                      52.5715 40.9996 52.6771 42.5183 51.2887C42.6004 51.2136 42.6791 51.135 42.7541
                      51.0528C43.3853 50.3592 43.6952 49.4319 43.6075 48.4982L42.8363 31.28C44.3164
                      30.4962 45.3603 29.0822 45.6736 27.4368C46.0177 25.4807 45.8968 23.471 45.3205
                      21.5702ZM43.5723 27.0656C43.3413 28.2488 42.4981 29.2196 41.3589 29.6139C40.9265
                      29.7764 40.648 30.1988 40.6688 30.6603L41.4795 48.6667C41.5168 49.0199 41.4003
                      49.372 41.1595 49.6331C40.5172 50.269 39.4828 50.269 38.8405 49.6331C38.5877
                      49.351 38.4729 48.9712 38.5269 48.5963L39.3312 30.6603C39.352 30.1988 39.0735
                      29.7764 38.6411 29.6139C37.5019 29.2196 36.6587 28.2488 36.4277 27.0656C36.1424
                      25.4416 36.2429 23.7732 36.7211 22.1952L37.4059 19.9403C37.9357 18.5076 39.5267
                      17.7758 40.9595 18.3056C41.7169 18.5858 42.314 19.183 42.5941 19.9403L43.2789
                      22.1952C43.7565 23.7734 43.8571 25.4416 43.5723 27.0656Z"
            />
            <path
              d="M28.8 16C28.2109 16 27.7333 16.4776 27.7333 17.0667V26.2251L24.8459
                      29.1125C24.6323 29.3253 24.5187 29.6188 24.5333 29.92L25.4667 48.5867C25.4889
                      48.9892 25.3428 49.3829 25.0635 49.6736C24.4796 50.2627 23.5287 50.2669 22.9395
                      49.6829C22.9363 49.6799 22.9332 49.6767 22.9301 49.6736C22.6507 49.3829 22.5047
                      48.9892 22.5269 48.5867L23.4667 29.92C23.4816 29.6189 23.3684 29.3256 23.1552
                      29.1125L20.2667 26.2251V17.0667C20.2667 16.4776 19.7891 16 19.2 16C18.6109
                      16 18.1333 16.4776 18.1333 17.0667V26.6667C18.1333 26.9496 18.2459 27.2208
                      18.4459 27.4208L21.3109 30.2869L20.4011 48.4832C20.3043 50.4708 21.8371
                      52.1607 23.8247 52.2575C25.8123 52.3543 27.5021 50.8215 27.5989 48.8339C27.6047
                      48.7171 27.6047 48.6001 27.5989 48.4833L26.6891 30.2871L29.5541 27.4209C29.7541
                      27.2209 29.8667 26.9497 29.8667 26.6668V17.0668C29.8667 16.4776 29.3891 16 28.8 16Z"
            />
            <path
              d="M22.4 16C21.8109 16 21.3333 16.4776 21.3333 17.0667V25.6C21.3333 26.1891
                      21.8109 26.6667 22.4 26.6667C22.9891 26.6667 23.4667 26.1891 23.4667 25.6V17.0667C23.4667
                      16.4776 22.9891 16 22.4 16Z"
            />
            <path
              d="M25.6 16C25.0109 16 24.5333 16.4776 24.5333 17.0667V25.6C24.5333 26.1891
                      25.0109 26.6667 25.6 26.6667C26.1891 26.6667 26.6667 26.1891 26.6667 25.6V17.0667C26.6667
                      16.4776 26.1891 16 25.6 16Z"
            />
            <path
              d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731
                      64 32C63.98 14.3352 49.6648 0.02 32 0ZM32 61.8667C15.5051 61.8667 2.13333 48.4949
                      2.13333 32C2.13333 15.5051 15.5051 2.13333 32 2.13333C48.4949 2.13333 61.8667
                      15.5051 61.8667 32C61.8479 48.4871 48.4871 61.8479 32 61.8667Z"
            />
            <path
              d="M35.4625 52.0229C35.4053 51.4367 34.8836 51.0077 34.2972 51.0649C34.2835
                      51.0663 34.2697 51.0679 34.256 51.0697L34.2603 51.0687C32.7585 51.2431 31.2415
                      51.2431 29.7397 51.0687C29.1544 51 28.6244 51.4188 28.5557 52.0041C28.4871
                      52.5895 28.9059 53.1195 29.4912 53.1881C31.1567 53.3827 32.8391 53.3827
                      34.5045 53.1881C35.0908 53.1311 35.5197 52.6093 35.4625 52.0229Z"
            />
            <path
              d="M48.32 18.2549C47.9414 17.8035 47.2686 17.7445 46.8173 18.1231C46.8158
                      18.1243 46.8144 18.1257 46.8128 18.1269C46.3625 18.5066 46.3052 19.1794 46.6848
                      19.6298C53.1161 27.2645 52.6241 38.5537 45.553 45.5999C45.1357 46.0158 45.1345
                      46.6914 45.5504 47.1087C45.9662 47.5261 46.6418 47.5273 47.0592 47.1114C54.9174
                      39.283 55.4654 26.7387 48.32 18.2549Z"
            />
            <path
              d="M24.851 14.0992C24.8505 14.0992 24.85 14.0991 24.8495 14.0991C24.8487
                      14.0991 24.8478 14.0992 24.8469 14.0992H24.851Z"
            />
            <path
              d="M37.0315 11.263C32.8628 10.2639 28.4908 10.5324 24.4757 12.0342C23.9243
                      12.2415 23.6455 12.8567 23.8528 13.408C24.0091 13.8236 24.4064 14.0987 24.8503
                      14.0991C24.9779 14.0984 25.1043 14.0751 25.2235 14.0299C28.8392 12.6778 32.7763
                      12.4363 36.5301 13.3366C37.1028 13.475 37.6792 13.1231 37.8176 12.5504C37.956
                      11.9778 37.6041 11.4014 37.0315 11.263Z"
            />
            <path
              d="M18.3989 45.5466C14.8031 41.9569 12.7877 37.081 12.8 32C12.7895
                      27.9405 14.0753 23.9837 16.4704 20.7061C16.8244 20.2352 16.7296 19.5665
                      16.2587 19.2125C15.7877 18.8585 15.1191 18.9533 14.7651 19.4243C14.7588
                      19.4327 14.7527 19.441 14.7467 19.4496C8.5796 27.928 9.48706 39.6308
                      16.8875 47.057C17.3045 47.4744 17.9811 47.4746 18.3984 47.0576C18.8157
                      46.6405 18.816 45.964 18.3989 45.5466Z"
            />
          </svg>
          <h3 className="services__title">Excellent food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>
        <div className="services__content">
          <svg className="services__img" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path
                d="M55.82 22.0395C55.5475 21.5164 54.9027 21.3132 54.3795 21.5855L54.3794
                      21.5857L49.4885 24.1283H49.481L32.1524 33.1455L38.0258 14.5397C38.0258 14.5323
                      38.0343 14.5269 38.0364 14.5184L39.6917 9.24302C39.8672 8.68077 39.5542 8.08249
                      38.9922 7.90602C23.9044 3.04166 7.72977 11.3293 2.86527 26.4172C-1.99923 41.5051
                      6.28852 57.6796 21.3763 62.5441C21.4918 62.5813 21.6074 62.6178 21.7234 62.6535C24.5311
                      63.5434 27.4587 63.9975 30.4042 64.0002C42.9131 63.965 53.9649 55.8488 57.7422
                      43.9239C60.0541 36.6656 59.3619 28.7836 55.82 22.0395ZM29.3406 34.962C29.164
                      35.5247 29.4769 36.1241 30.0396 36.3008C30.3091 36.3854 30.601 36.3598 30.8517
                      36.2296L49.4682 26.5439C49.5504 26.7222 49.638 26.8984 49.7149 27.0778C49.8216
                      27.3362 49.9284 27.5957 50.0352 27.8584C50.173 28.2183 50.2969 28.5814 50.4133
                      28.9466C50.5019 29.2243 50.5884 29.503 50.6653 29.7828C50.7625 30.1405 50.8457
                      30.5015 50.9237 30.8635C50.9867 31.1539 51.0508 31.4433 51.101 31.7349C51.1629
                      32.0969 51.2078 32.46 51.2505 32.8241C51.2857 33.1178 51.3242 33.4104 51.3466
                      33.7051C51.3744 34.0778 51.3808 34.4526 51.3882 34.8253C51.3946 35.1126 51.4085
                      35.3988 51.4021 35.686C51.3946 36.0822 51.3605 36.4784 51.3306 36.8746C51.3092
                      37.1394 51.2996 37.4086 51.2697 37.6691C51.2163 38.1219 51.1341 38.5725 51.0561
                      39.0232C51.0187 39.2304 50.9953 39.4386 50.9493 39.6447C50.8084 40.3036 50.6386
                      40.9603 50.4325 41.6118C48.7654 46.9422 45.0355 51.3845 40.074 53.9491C39.6361
                      54.1776 39.1865 54.3687 38.738 54.5642C28.0956 59.2052 15.7058 54.3402 11.0648
                      43.6977C7.01535 34.4119 10.1643 23.5587 18.5549 17.8822C19.2289 17.4217 19.9288
                      17.0002 20.6512 16.62C21.2172 16.3252 21.7949 16.0658 22.3769 15.8255C22.4784
                      15.7828 22.5798 15.74 22.6823 15.6995C23.2519 15.4767 23.8243 15.2783 24.3995
                      15.1047C24.4977 15.0748 24.5981 15.0502 24.6974 15.0224C25.2613 14.8633 25.8283
                      14.7245 26.4007 14.6145C26.4456 14.6059 26.4904 14.5942 26.5363 14.5857C27.1344
                      14.4789 27.7377 14.3956 28.3432 14.3368L28.6956 14.3048C29.2936 14.2578 29.8938
                      14.2322 30.495 14.2375C30.5879 14.2375 30.6797 14.2439 30.7716 14.2461C31.3109
                      14.2567 31.8512 14.2909 32.3905 14.3443C32.5144 14.3561 32.6372 14.3657 32.7611
                      14.3796C33.3569 14.4507 33.9522 14.5461 34.5466 14.6657C34.6715 14.6914 34.7965 14.7234 34.9214
                      14.7512C35.1681 14.8067 35.4137 14.8804 35.6604 14.9445L29.3406 34.962ZM55.6993 43.2777C51.2801
                      57.2726 36.3525 65.0352 22.3577 60.616C15.642 58.4955 10.0427 53.7957 6.79003 47.5492C-0.00601205
                      34.5574 5.01667 18.5164 18.0083 11.7204C23.9533 8.61056 30.8553 7.86704 37.3263 9.6392L36.3097
                      12.8824C36.0897 12.8236 35.8675 12.7895 35.6465 12.7382C35.3261 12.6613 34.9983 12.5887 34.6726
                      12.5246C34.2743 12.4488 33.877 12.3879 33.4776 12.3335C33.1412 12.2865 32.8059 12.2406 32.4695
                      12.2096C32.0733 12.1722 31.6793 12.1541 31.2842 12.137C30.9457 12.1231 30.6082 12.1071 30.2707
                      12.1071C29.8724 12.1071 29.4762 12.1306 29.079 12.153C28.7458 12.1712 28.4148 12.1829 28.0837
                      12.216C27.6779 12.2555 27.2743 12.3228 26.8717 12.3826C26.5513 12.4307 26.2309 12.4702 25.917
                      12.5321C25.4984 12.6154 25.084 12.7254 24.6686 12.8311C24.3728 12.9069 24.0749 12.9699 23.7812
                      13.0575C23.338 13.1899 22.9013 13.3533 22.4634 13.5135C22.205 13.6075 21.9434 13.6854 21.6881
                      13.7901C21.1542 14.0037 20.6363 14.2557 20.1173 14.512C19.9667 14.5867 19.8108 14.6444 19.6613
                      14.7256C19.0408 15.0459 18.446 15.4037 17.864 15.7742C7.77422 22.2215 4.26621 35.2991 9.77477
                      45.9303C9.78332 45.9474 9.78972 45.9645 9.79827 45.9805C9.81963 46.0211 9.84632 46.0574 9.86661
                      46.0979C12.6976 51.506 17.5617 55.5673 23.3882 57.3877C23.4202 57.3983 23.4523 57.4037 23.4833
                      57.4133C24.1154 57.6098 24.7519 57.7732 25.3916 57.9141C25.6222 57.9654 25.854 58.0049 26.0857
                      58.0497C26.5395 58.1352 26.9945 58.2099 27.4505 58.2633C27.7046 58.2954 27.9577 58.3263 28.2119
                      58.3509C28.6871 58.3957 29.1623 58.4224 29.6375 58.4374C29.8511 58.4449 30.0646 58.4609 30.2697
                      58.462C30.3081 58.462 30.3466 58.462 30.385 58.462C30.9681 58.462 31.5501 58.4321 32.1299
                      58.3872C32.3061 58.3733 32.4813 58.3573 32.6564 58.3391C33.2843 58.2772 33.9101 58.196 34.5306
                      58.0818C34.6373 58.0626 34.7441 58.0359 34.8509 58.0145C35.4148 57.9077 35.9743 57.7668 36.5307
                      57.6119C36.677 57.5713 36.8233 57.534 36.9685 57.4902C37.5836 57.3065 38.1913 57.094 38.7936
                      56.858C38.9281 56.8046 39.0605 56.7512 39.194 56.6935C39.8241 56.4319 40.4488 56.1521 41.0607
                      55.8392C46.5215 53.0152 50.6262 48.1245 52.4604 42.2568C52.4924 42.1564 52.5106 42.0539 52.5405
                      41.9535C52.7274 41.3352 52.8961 40.7158 53.0296 40.0911C53.0819 39.8455 53.1107 39.5988 53.1545
                      39.3521C53.2421 38.8673 53.3318 38.3835 53.3884 37.8966C53.4204 37.6189 53.429 37.3413 53.4514
                      37.0626C53.4866 36.6066 53.5251 36.1516 53.5336 35.6967C53.54 35.402 53.524 35.1083 53.5187
                      34.8136C53.5101 34.3768 53.5027 33.9401 53.4685 33.5044C53.445 33.1979 53.4023 32.8935 53.367
                      32.5881C53.3168 32.1684 53.2666 31.7509 53.1951 31.3344C53.1396 31.014 53.068 30.7044 52.9997
                      30.3893C52.9121 29.991 52.8224 29.5938 52.7146 29.1986C52.6249 28.8783 52.5213 28.5515
                      52.4177 28.229C52.297 27.8552 52.1721 27.4815 52.0322 27.1141C51.9051 26.7788 51.7652
                      26.4467 51.6221 26.1156C51.5399 25.9266 51.4758 25.7333 51.3882 25.5454L54.4007
                      23.9777C57.2654 30.0137 57.7296 36.9125 55.6993 43.2777Z"
              />
              <path
                d="M62.4099 14.2524C58.9465 7.45084 52.8892 2.33112 45.6056 0.0494396C45.0432 -0.127563 44.4439
                      0.184527 44.2665 0.74677L42.5888 6.06592L35.8686 27.366C35.7386 27.7788 35.8706 28.2291 36.2029
                      28.5065C36.5352 28.7839 37.002 28.8333 37.385 28.6315L57.0448 18.2729L61.9571 15.6833C62.4744
                      15.4107 62.6762 14.7729 62.4099 14.2524ZM44.8965 10.6002C45.7812 10.6002 46.4984 11.3174 46.4984
                      12.202C46.4984 13.0866 45.7812 13.8038 44.8965 13.8038C44.0119 13.8038 43.2947 13.0866 43.2947
                      12.202C43.2947 11.3174 44.0119 10.6002 44.8965 10.6002ZM38.6878 25.5314L40.1167 21.0003C40.1946
                      22.1759 40.8244 23.2453 41.8146 23.8836L38.6878 25.5314ZM43.8287 22.3469C42.944 22.3469 42.2268
                      21.6297 42.2268 20.7451C42.2268 19.8605 42.944 19.1433 43.8287 19.1433C44.7133 19.1433 45.4305
                      19.8605 45.4305 20.7451C45.4305 21.6299 44.7133 22.3469 43.8287 22.3469ZM47.5673 20.8583C47.5673
                      20.8188 47.5791 20.7825 47.5791 20.743C47.5884 18.6876 45.9297 17.0139 43.8744 17.0046C42.7351 16.9994
                      41.6562 17.5164 40.9464 18.4075L42.1136 14.672C43.4742 16.2298 45.84 16.3897 47.3979 15.0292C48.9557
                      13.6686 49.1156 11.3028 47.7551 9.74493C46.8342 8.69052 45.4021 8.23774 44.0424 8.57119L44.2944
                      7.77561C44.4759 7.84289 44.6607 7.90482 44.8401 7.97744C45.0857 8.07675 45.3302 8.17714 45.5705
                      8.28499C45.9379 8.44945 46.2967 8.62778 46.6523 8.81253C46.8744 8.92786 47.0997 9.03999 47.3176
                      9.16386C47.6956 9.37744 48.0651 9.61024 48.425 9.84731C48.6022 9.96264 48.7849 10.0694 48.9589
                      10.1912C49.4722 10.5472 49.9706 10.9269 50.454 11.3306L50.4945 11.3616C50.9858 11.777 51.4556 12.2159
                      51.9052 12.6804C52.0494 12.8278 52.1829 12.988 52.3238 13.1396C52.6218 13.46 52.9154 13.79 53.1942
                      14.1327C53.3501 14.325 53.4964 14.5257 53.6459 14.7244C53.8904 15.0447 54.1286 15.3758 54.355 15.7143C54.5002
                      15.9279 54.6401 16.1553 54.7821 16.3796C54.8889 16.5494 54.9818 16.7266 55.0822 16.8996L47.5673 20.8583ZM56.9829
                      15.8937C56.8654 15.6876 56.7287 15.4964 56.6049 15.2946C56.45 15.0415 56.2941 14.7884 56.1297 14.5471C55.883
                      14.1765 55.6213 13.8188 55.3544 13.4653C55.1867 13.2421 55.0233 13.0147 54.8471 12.799C54.5428 12.4231 54.2203
                      12.0664 53.8946 11.7118C53.7355 11.5399 53.5859 11.3594 53.4215 11.1918C52.9271 10.6877 52.4145 10.204 51.8763
                      9.748L51.8602 9.73305C51.3167 9.27386 50.7486 8.8435 50.1634 8.43663C49.9722 8.30421 49.7704 8.18781 49.576
                      8.06074C49.1724 7.79697 48.7655 7.53854 48.3448 7.3004C48.1034 7.16478 47.8546 7.04304 47.6079 6.91489C47.2139
                      6.71093 46.8177 6.51337 46.4108 6.33076C46.1428 6.21222 45.8715 6.10223 45.5981 5.9933C45.3771 5.90467 45.1646
                      5.80108 44.9403 5.71886L45.9783 2.42229C51.9362 4.55766 56.9208 8.77582 60.0125 14.2983L56.9829 15.8937Z"
              />
              <path
                d="M25.6746 17.0076C23.6103 17.0076 21.937 18.6809 21.937 20.7452C21.937 22.8094 23.6103 24.4828 25.6746
                      24.4828C27.7388 24.4828 29.4122 22.8094 29.4122 20.7452C29.4122 18.6809 27.7388 17.0076 25.6746 17.0076ZM25.6746
                      22.347C24.7899 22.347 24.0727 21.6298 24.0727 20.7452C24.0727 19.8606 24.7899 19.1433 25.6746 19.1433C26.5592
                      19.1433 27.2764 19.8606 27.2764 20.7452C27.2764 21.6299 26.5592 22.347 25.6746 22.347Z"
              />
              <path
                d="M14.9957 26.6185C12.9315 26.6185 11.2581 28.2919 11.2581 30.3561C11.2581 32.4204 12.9315 34.0938 14.9957
                      34.0938C17.0599 34.0938 18.7333 32.4204 18.7333 30.3561C18.7333 28.2919 17.0599 26.6185 14.9957 26.6185ZM14.9957
                      31.958C14.1111 31.958 13.3938 31.2408 13.3938 30.3561C13.3938 29.4715 14.1111 28.7543 14.9957 28.7543C15.8803
                      28.7543 16.5975 29.4715 16.5975 30.3561C16.5975 31.2409 15.8803 31.958 14.9957 31.958Z"
              />
              <path
                d="M25.6746 26.6185C23.6103 26.6185 21.937 28.2919 21.937 30.3561C21.937 32.4204 23.6103 34.0938
                      25.6746 34.0938C27.7388 34.0938 29.4122 32.4204 29.4122 30.3561C29.4122 28.2919 27.7388 26.6185 25.6746
                      26.6185ZM25.6746 31.958C24.7899 31.958 24.0727 31.2408 24.0727 30.3561C24.0727 29.4715 24.7899 28.7543
                      25.6746 28.7543C26.5592 28.7543 27.2764 29.4715 27.2764 30.3561C27.2764 31.2409 26.5592 31.958 25.6746 31.958Z"
              />
              <path
                d="M36.3534 45.8406C34.2892 45.8406 32.6158 47.514 32.6158 49.5782C32.6158 51.6424 34.2892 53.3158
                      36.3534 53.3158C38.4177 53.3158 40.0911 51.6424 40.0911 49.5782C40.0911 47.514 38.4177 45.8406 36.3534
                      45.8406ZM36.3534 51.18C35.4688 51.18 34.7516 50.4628 34.7516 49.5782C34.7516 48.6936 35.4688 47.9764
                      36.3534 47.9764C37.2381 47.9764 37.9553 48.6936 37.9553 49.5782C37.9553 50.4629 37.2381 51.18 36.3534 51.18Z"
              />
              <path
                d="M43.8287 38.3654C41.7644 38.3654 40.091 40.0387 40.091 42.103C40.091 44.1672 41.7644 45.8406 43.8287
                      45.8406C45.8929 45.8406 47.5663 44.1672 47.5663 42.103C47.5663 40.0387 45.8929 38.3654 43.8287 38.3654ZM43.8287
                      43.7048C42.944 43.7048 42.2268 42.9876 42.2268 42.103C42.2268 41.2184 42.944 40.5011 43.8287 40.5011C44.7133
                      40.5011 45.4305 41.2184 45.4305 42.103C45.4305 42.9877 44.7133 43.7048 43.8287 43.7048Z"
              />
              <path
                d="M47.0323 29.8223C44.9681 29.8223 43.2947 31.4956 43.2947 33.5599C43.2947 35.6241 44.9681 37.2975 47.0323
                      37.2975C49.0966 37.2975 50.7699 35.6241 50.7699 33.5599C50.7699 31.4956 49.0966 29.8223 47.0323 29.8223ZM47.0323
                      35.1617C46.1477 35.1617 45.4305 34.4445 45.4305 33.5599C45.4305 32.6753 46.1477 31.958 47.0323 31.958C47.9169
                      31.958 48.6342 32.6753 48.6342 33.5599C48.6342 34.4446 47.9169 35.1617 47.0323 35.1617Z"
              />
              <path
                d="M16.0636 37.2975C13.9993 37.2975 12.326 38.9709 12.326 41.0351C12.326 43.0993 13.9993 44.7727 16.0636
                      44.7727C18.1278 44.7727 19.8012 43.0993 19.8012 41.0351C19.8012 38.9709 18.1278 37.2975 16.0636 37.2975ZM16.0636
                      42.6369C15.179 42.6369 14.4617 41.9197 14.4617 41.0351C14.4617 40.1505 15.179 39.4333 16.0636 39.4333C16.9482
                      39.4333 17.6654 40.1505 17.6654 41.0351C17.6654 41.9198 16.9482 42.6369 16.0636 42.6369Z"
              />
              <path
                d="M33.1498 36.2296C31.0856 36.2296 29.4122 37.903 29.4122 39.9672C29.4122 42.0314 31.0856 43.7048 33.1498
                      43.7048C35.214 43.7048 36.8874 42.0314 36.8874 39.9672C36.8874 37.903 35.214 36.2296 33.1498 36.2296ZM33.1498
                      41.5691C32.2652 41.5691 31.5479 40.8518 31.5479 39.9672C31.5479 39.0826 32.2652 38.3654 33.1498 38.3654C34.0344
                      38.3654 34.7516 39.0826 34.7516 39.9672C34.7516 40.852 34.0344 41.5691 33.1498 41.5691Z"
              />
              <path
                d="M23.5388 45.8406C21.4746 45.8406 19.8012 47.514 19.8012 49.5782C19.8012 51.6424 21.4746 53.3158 23.5388
                      53.3158C25.603 53.3158 27.2764 51.6424 27.2764 49.5782C27.2764 47.514 25.603 45.8406 23.5388 45.8406ZM23.5388
                      51.18C22.6542 51.18 21.937 50.4628 21.937 49.5782C21.937 48.6936 22.6542 47.9764 23.5388 47.9764C24.4234
                      47.9764 25.1406 48.6936 25.1406 49.5782C25.1406 50.4629 24.4234 51.18 23.5388 51.18Z"
              />
              <path
                d="M17.6654 22.347C17.0757 22.347 16.5975 22.8252 16.5975 23.4149C16.5975 24.0047 17.0757 24.4828 17.6654
                      24.4828C18.2551 24.4828 18.7333 24.961 18.7333 25.5507C18.7333 26.1405 19.2114 26.6186 19.8012 26.6186C20.3909
                      26.6186 20.8691 26.1405 20.8691 25.5507C20.8691 23.7815 19.4348 22.347 17.6654 22.347Z"
              />
              <path
                d="M31.5479 44.7727C29.7786 44.7727 28.3443 46.207 28.3443 47.9764C28.3443 48.5661 28.8224 49.0443 29.4122
                      49.0443C30.0019 49.0443 30.4801 48.5661 30.4801 47.9764C30.4801 47.3866 30.9582 46.9085 31.5479 46.9085C32.1377
                      46.9085 32.6158 46.4303 32.6158 45.8406C32.6158 45.2509 32.1377 44.7727 31.5479 44.7727Z"
              />
              <path
                d="M33.8135 16.252C33.3962 15.835 32.72 15.8353 32.303 16.2526C31.8806 16.6564 31.2153 16.6564 30.793
                      16.2526C30.3759 15.8353 29.6997 15.835 29.2824 16.252C28.8651 16.6691 28.8649 17.3453 29.2819 17.7626C30.5327
                      19.0141 32.561 19.0147 33.8126 17.764C33.8131 17.7635 33.8135 17.7631 33.814 17.7626C34.231 17.3453 34.2308
                      16.6691 33.8135 16.252Z"
              />
              <path
                d="M41.1589 34.0938C39.3896 34.0938 37.9553 35.528 37.9553 37.2974C37.9553 37.8871 38.4334 38.3653 39.0232
                      38.3653C39.6129 38.3653 40.0911 37.8871 40.0911 37.2974C40.0911 36.7077 40.5692 36.2295 41.1589 36.2295C41.7487
                      36.2295 42.2268 35.7514 42.2268 35.1616C42.2268 34.5719 41.7487 34.0938 41.1589 34.0938Z"
              />
              <path
                d="M24.8292 36.0997C24.8287 36.0992 24.8283 36.0988 24.8277 36.0982C24.4105 35.6812 23.7342 35.6815 23.3172
                      36.0988C22.9002 36.516 22.9005 37.1923 23.3177 37.6093C23.7346 38.0263 23.7346 38.7023 23.3177 39.1193C22.9002
                      39.5358 22.8993 40.212 23.3159 40.6295C23.3161 40.6298 23.3164 40.6301 23.3167 40.6303C23.7334 41.0476 24.4097
                      41.048 24.8269 40.6311C24.8272 40.6309 24.8275 40.6306 24.8277 40.6303C26.0793 39.3797 26.0798 37.3513 24.8292
                      36.0997Z"
              />
              <path
                d="M50.7699 13.804C50.1802 13.804 49.702 14.2821 49.702 14.8718C49.702 15.4616 49.2239 15.9397 48.6342
                      15.9397C48.0444 15.9397 47.5663 16.4179 47.5663 17.0076C47.5663 17.5974 48.0444 18.0755 48.6342 18.0755C50.4035
                      18.0755 51.8378 16.6412 51.8378 14.8718C51.8378 14.2821 51.3597 13.804 50.7699 13.804Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={64} height={64} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h3 className="services__title">Fast food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>
        <div className="services__content">
          <svg className="services__img" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path
                d="M19.1978 49.6016C17.4308 49.6016 15.9981 51.0342 15.9981 52.8012C15.9981 54.5682 17.4308
                      56.0008 19.1978 56.0008C20.9648 56.0008 22.3974 54.5682 22.3974 52.8012C22.3974 51.0342 20.9648
                      49.6016 19.1978 49.6016ZM19.1978 53.8677C18.6088 53.8677 18.1312 53.3902 18.1312 52.8012C18.1312
                      52.2122 18.6088 51.7347 19.1978 51.7347C19.7868 51.7347 20.2643 52.2122 20.2643 52.8012C20.2643
                      53.3902 19.7868 53.8677 19.1978 53.8677Z"
              />
              <path
                d="M50.1275 49.6016C48.3605 49.6016 46.9279 51.0342 46.9279 52.8012C46.9279 54.5682 48.3605
                      56.0008 50.1275 56.0008C51.8945 56.0008 53.3271 54.5682 53.3271 52.8012C53.3271 51.0342 51.8945
                      49.6016 50.1275 49.6016ZM50.1275 53.8677C49.5385 53.8677 49.0609 53.3902 49.0609 52.8012C49.0609
                      52.2122 49.5385 51.7347 50.1275 51.7347C50.7165 51.7347 51.194 52.2122 51.194 52.8012C51.194
                      53.3902 50.7165 53.8677 50.1275 53.8677Z"
              />
              <path d="M3.19962 21.8715H5.3327V24.0045H3.19962V21.8715Z" />
              <path d="M0 26.1377H2.13308V28.2708H0V26.1377Z" />
              <path d="M52.2606 11.2061H58.6598V13.3391H52.2606V11.2061Z" />
              <path d="M47.9944 11.2061H50.1275V13.3391H47.9944V11.2061Z" />
              <path d="M34.1294 4.80676H44.7948V6.93985H34.1294V4.80676Z" />
              <path d="M29.8632 4.80676H31.9963V6.93985H29.8632V4.80676Z" />
              <path
                d="M63.9925 59.2005V57.0674H54.8842C55.7935 56.0607 56.3575 54.7906 56.495 53.4412L63.4593
                      49.461C63.5087 49.4266 63.5556 49.3886 63.5988 49.3469C63.6363 49.3214 63.6723 49.2928 63.7056
                      49.2626C63.7858 49.1777 63.8514 49.0798 63.8998 48.9735C63.905 48.9636 63.9123 48.9574 63.917
                      48.948C63.9655 48.8272 63.9915 48.6986 63.9936 48.5684C63.9936 48.5564 63.9998 48.547 63.9998
                      48.535V38.9362C63.9951 38.9049 63.9889 38.8742 63.9806 38.8435C63.9821 38.8159 63.9821 38.7877
                      63.9806 38.7601L61.8475 25.9616C61.8428 25.946 61.8371 25.9299 61.8308 25.9148C61.8308 25.9033
                      61.8308 25.8903 61.8308 25.8788L60.7643 21.6127C60.645 21.1367 60.2169 20.8034 59.7264 20.8049H46.7893C46.6446
                      20.2852 46.3696 19.8103 45.9905 19.4259L38.708 12.1435C38.1096 11.5414 37.2951 11.204 36.4457
                      11.2061H10.6654C10.0764 11.2061 9.59888 11.6836 9.59888 12.2726V16.5388H0V18.6719H9.59888V21.8715H7.4658V24.0046H9.59888V26.1377H4.26617V28.2707H9.59888V37.8696C9.00989
                      37.8696 8.53234 38.3472 8.53234 38.9362V48.535C8.53234 48.5574 8.54432 48.5767 8.54536 48.6001C8.55161
                      48.6965 8.57088 48.7918 8.60264 48.8829C8.61254 48.9168 8.62451 48.9501 8.63805 48.9829C8.68805 49.0949
                      8.75679 49.1969 8.84168 49.285L12.8178 53.2611C12.9198 54.6749 13.4911 56.0149 14.441 57.0674H0V59.2005H63.9925ZM44.1016 50.6681H25.2236C25.0929
                      50.2984 24.9278 49.9411 24.731 49.6016H44.5943C44.3974 49.9411 44.2323 50.2984 44.1016 50.6681ZM25.597
                      52.8012H43.7282C43.7288 54.3776 44.3141 55.8977 45.3708 57.0674H23.9545C25.0111 55.8977 25.5965 54.3776
                      25.597 52.8012ZM45.8613 52.8012C45.8613 50.4452 47.7715 48.535 50.1275 48.535C52.4835 48.535 54.3937
                      50.4452 54.3937 52.8012C54.3937 55.1572 52.4835 57.0674 50.1275 57.0674C47.7715 57.0674 45.8613 55.1572 45.8613
                      52.8012ZM56.2898 51.0946C56.145 50.5723 55.9336 50.0703 55.6607 49.6016H58.9093L56.2898 51.0946ZM61.6662
                      37.8696H51.194V27.2042H59.8894L61.6662 37.8696ZM59.4269 25.0711H50.1275C49.5385 25.0711 49.0609 25.5487
                      49.0609 26.1377V38.9362C49.0609 39.5252 49.5385 40.0027 50.1275 40.0027H61.8595V42.1358H58.6598V44.2689H61.8595V47.4685H53.6578C51.519
                      46.0463 48.736 46.0463 46.5972 47.4685H22.7281C20.5893 46.0463 17.8063 46.0463 15.6674
                      47.4685H10.6654V43.2023H14.9316V41.0692H10.6654V40.0027H45.8613C46.4503 40.0027 46.9279
                      39.5252 46.9279 38.9362V22.938H58.8937L59.4269 25.0711ZM11.732 28.2707H20.2643V26.1377H11.732V24.0046H21.3308V21.8715H11.732V18.6719H17.0647V16.5388H11.732V13.3391H36.4457C36.7285
                      13.3402 36.9993 13.4527 37.1998 13.6516L44.4823 20.9341C44.6828 21.1341 44.7948 21.4059 44.7948 21.6892V37.8696H11.732V28.2707ZM13.6646
                      49.6016C13.4766 49.9255 13.3177 50.2661 13.1901 50.6181L12.1736 49.6016H13.6646ZM14.9316
                      52.8012C14.9316 50.4452 16.8418 48.535 19.1978 48.535C21.5537 48.535 23.4639 50.4452 23.4639
                      52.8012C23.4639 55.1572 21.5537 57.0674 19.1978 57.0674C16.8418 57.0674 14.9316 55.1572 14.9316 52.8012Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={64} height={64} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h3 className="services__title">Delivery</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
