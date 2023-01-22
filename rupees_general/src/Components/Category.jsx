import { Card, CardBody, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

        const data = [
            {img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD////5+fnu7u6RkZE1NTXy8vLPz89KSkqMjIy8vLyAgIBvb2+kpKRkZGTX19cSEhLe3t52dnbJycm0tLTm5uaZmZn19fUfHx/Dw8Otra3c3NxcXFx8fHzV1dVFRUVUVFQrKys6OjqWlpZGRkYmJiYxMTEdHR1YWFgMDAxqamqiMOKAAAATpUlEQVR4nOWdiZaquhJACTgBoiKgDSqiHu1u//8DX1BCKhODARvvq7XuXX1QgQ1JTakkBupdzMkyDjfu4b7PZsfz+Hw+zvbzg3sJnall9n95o8+TT6aenZ2MKrnOXC+I+ryJvgiteLSvRGMlG8VWT3fSB6EVHq4t6Ih8zcM+KDsnTEfnF+iIXN2g667ZLWGw1qAjsnA6heyQMJh3gPeUe9zdbXVF6Nud4T3F9Tu6s24Iw2PHfLkcnU7urQNCa9Tkflen8yzbL+aH9fy+nx3H301+dJkMgDCq6X2ru53EvikqD9NKHc/d/1b/fK7tDWgS7qrM+mwUks40saJpHCZJsrlsPC8JnWBHPDZzF9pVjXy/07tFLUL/R31fyfPGttPEXtzkL+r7PB8l0+3je0tP/az2Wu9Rg9C6K+4o2ywfn8ejrOLdlLLaFy7bUukszDWcnZcJTYV52If5S7GS+6oJXSnfByfXKpangBy9nTCR3scszDtX4FbHEyoZj/J3H3k36aev2o7XCFMZwtclb0uxnmfjTlHuPsg67vE1H+AlQpn3mQX4g2kHfumvm79JR9Za3TcRxrJrY3VnXWpsW2P58nCf3MmeVvAGQlPSCjdYuQRtAt56mWNjY7ni8XXvhFPxoh4+HOsEhXLJ3dKtqLBXy34JxStu8NHwNd1ZJ6cQNxnR6d30SDgRvCsXW4ewq+4nyneCLyp0i6xVhNyGMOAv9YP1i/PVG9+DEbdVP+OPpv0QbrjLfGHFlsqtc5dyxjgOf9Drg3DBXQT7URZ/rB/ZY0/iwB27d064HbNXGPviS+1P8CtbciHzuWlnbEjoc5fE+mz3Sk70VTlhG8Fbx4YxVTNCzgp+7cTr9S2uqOmm3RFygQT2K3b9alCZnHxBFzQKN5oQboTzeu8DA+IJFw67IWS9iu8ITWZvxIKCTX3KHmlgNeoJWUdtj/iLvFWWaPuPOVDvwtUSsoD2X7VQItiNY9NDtYh1hKPq879fsJq7MAfqGmoNIfvCsJvWR/q+ncywr88cSHQI2VP5yGqUi+9ZrhZnn6uNRiUhe6II7d4JUiE+p+0qQ40qQsZVW1li9PRnknJuZJUDV0G4hef4noghzB/KFEXwn78VbngFIYwmVhNFDvivJGYRz68QMj6gNTDAHJFpqOp4UUnIOKMRp1WHIFO0hP9UWn4VIaNV/EH1QSIpq+tVsZSCcAJ/G8iypAMQn+0621aEMMGbCBH+UMRiHLhZG0Lobtus2RiSfLFusrwrSglho8ThUj8Z7S5kxrY2acJfSgh+9I1Q9t67biVrRmN8NyWEafQINaqW+TNJGBf10IwQjg860tHCIcmSifAkJkNCCH5wYH2jQYqJ4MhlE0Iw9HpFqP9xCV3JkAn+JQ6EC4TQFfLfnvd9RTzGARPKGQTCq+qnwxUf2m8hyuAJPfhdUzzbEAV3JlCexGeJOULovkSou6LffsVmfJRqQjBMd/mQNpqLD/WjXUUIbMOVMRsDlxNzs1YFIYjr04/Qo0Q2MIJdqwlBtnDxAbYeygTmqiMlYUa/ZKF//EkGLXf4eu4qQmDsR4P3R3lZQs0fKQgz+hWE+isD6kfGMI66ywnBa/b+eAztFXGgZxNJCaki/f0kS0HkCt2Vu4wQ6M7kjaUy3UkIX6IlIQTm71McUlZW8LZtCSH91PvIV8i9RJEQJFfND+yFudyQRf8RCoQ0K2cPbhSmqQTAJp55QpDWnqBOxrLvSZr6y2VweV/1zRFi7DhC2oLnXbgz+8AMnwmik71DCZftWWNyMjINI9IvfHxpWfh/frsZN0R2wNd0OUL6rRRlL50dSMYOVu0RCsRCRpJQ4Ye1XI2YZg7PxhLSYHesH1TEQimcJSlGLd0OLpNg68y33QJvM2YI6VU8ST1+KzluxfdyQ2wSL5eonB/KusBahB4w63eGkH5nomkq9uzpCsmHhbhiHCsjhGzpiBbhDXrXJiCkumWvmZ3Zc7aVSH6YGXY1LDoaxjBpEeLeTXu8AwjX4KhWgm3M2dZSHp2CaajWimZv4fidHqENBk3vgJB+Q9MlfTi8luSD56gQjMkw4YkQQuWmR7iC56KENNt416tJSKT6P5fCxQA1OpiQjjIAdD1CbOxoCwpKQnpOR5hW0UYKjIvss+dHIHObE9LRMOr4aBK64GnZJSF9snpOdyA1cE8pAjaaEXsQluVaVAtpEv6CZnojhPTsey2P7VrcbSb7sHATaeXRg9BYkJdYNm1NQnwhqk2tgpD2m0Q6AbapEO0vnWpStEeqyJ6ENMohVRW6hBdg9JOCkFL5SGceBVH+0g/J/NbSNS4Iy3yDWbg2uoT/QDucF4Slr/Gr55OiJoTlAyaE/8jPCi2kS2iYtJ18PQmp+Zprxb7HSkJSqlxegRDyro02YQwUs/UgpC9Vz1YQpSH3GUh/Kzt9SVjGqs+iAW1CF8QxzoOQFsxEWrZiLih+KISwdHspIdHBzwhdm/AErK79IMzKf+t1w8OrhLTQJzfW2oTGlrai2YOw/OePnstG8sytWylYSGDWBWEKamRyQvreNnqDomW8J/00Bq/pIZDQAK6NPqEHKhZxxwPxYKA3I2bVyFqUxpch3JPfOh0QLoBrGmNCqnj0FA213dIPiY9dOjwMIZ3as3C1CU8ga7DBhNSj0c1Bka4mTbcWtZ/0EixhmZjajvRXfgMpyjkmLMOpsW55CSlDlqaACwJqmjhCWsukXyGxo83ojAnLC621B2QKCmn0VOgSmlfjCLHH3BmhQxXKChn0hW6Eaf1tpbAXFREw8Ap5wrKGWZ9wBLrexKAdw5E3rzayZE0ekJlgKgXCVWeEB+inGdTDmcoDuzZy4rQJleeIJaysFwhJpY8+4Qw85MCgf1sdDBs+b1JS3D/l2qiMsPAK9Am/gLlwDGocTVkWsK14io6YH2Zn3kgIn9NeOqg2AxGhZ5QtVjP8JZKbbtH39gRAKeFPR4QW7fC2UZ7v1tHsJhvxM8Cf/ZPXPzLCx/PpgpB2uINR6tVjVxPUZhMh3SZZYEZOmJvUDghBvm1ulKX8WXdzDDcs0MyUPTx5r791QhhQTy0zSht477LSa2RZo0KjrlOUcGboHsexg2InjkUvaqQ7fpkLcGqORvmnvtPGyHgULPMB+alkYdLbT5ZlM/zfjyRcm3Wwsk+IsvJaRvk63YHPcGojCZ1H82WUYxZ2F81jIJLQpOHKKP2P0UcVdlcLyGP8GmWrv2iHFsMRj0Zwv/8H77BMvP1n+2Gpadz/FGGpS7+pPTzIY3MNCbo+YWNJUEb+vBrln/fGA097Z7mbBjs/vTzUlGrZ8oM8r/i7ns/n98VT8J/zTPKle/4B+M5Til/da6eCOHSY8myUDTZrSLiw0qIJHGO0c8+Oaj0CX4wxclklnueR7OkG/y1T4flxkkINvUISUs9YGyLE1C+dtY4tAjgCtxcD21LO0kCxkKIMu7J451TwQM/OfqTsakOElKYZFjQ+PDdKl0ZsuipTE4Z8YgbKqAHhWJp+3TUhBNn7tVEq0FWTGN/n3fONkvBxd3xBIpHXCXPEWkIQ47vt8jSeqDz4hbeIFO2wepn8VwgNs54QoGxArm1SW9K2kmQKbQVhVKkUdAgPtYTfINcWGrTzpbUV7J4sFypfR7EcTJTPENMhNKw6wjN4sDGT864bPswLZoSDsbSvBWSxP3lYrUW4qSvcmoOr7lqNW5iyXOhCZg+/dmQoRr64zWuEs+x58rq1G0eAZALGnurdtsdNCwUpskIxzy3HPKUjUa8RJg095xBRPwsZIGdTa/Kfr6VJwiqii8VIXZ7XCKOG8V1K+9KNHQOuWw+qGMae1D7Kea4LAuEOqbxEeGsawZrUl7oz4/i1QzN0N7Sgussu85jsp/iuTC+8RBg2JITG4sLVYtTs4cDMkZ7aSuNye6pXMjQv+cYrhOemyeI9iCEcpp7Gq60u5daYTBXfT57HSRW3pOO+QHgzmxLCClOfqYla1MZPR8SLJ7Po5KGZSo42hI+GNX7Y12aEsC6IrWv7rl96bi4gSq7qkpfmKb/ShvAxoU11IpmAaT/PujaqGRuMAmfi2n2CjfFJofFX8Q3R1Wv9Dp+/aET4DTxlV6gvVW+kVoq4MDHnJh6pJiPKVzjtC/3wOmlICAdgQq5G+NBs+MnmF7Vl3RaHDsWQGiIhtu5Tl8L3FD3rvMvq9e+mayGfLswCfmxgaa3GRFbkWfC1C33aQ9AN8wIWtla/TTnGGuyGCluhvXSoEL+GV9IvEY4bEd6Avb8XhLQfhe1mrrmkGhGGSBEzek2eAffL1/xS2RZXgtggw0fmW9BGtmg7lr8RdE3GhvxEL3Gu7GuEYZPYYgo8swgJ854qrykr5H/6LeC5TDPmc1KlzuWAKghdohZEwnOZ5x3zv6ICLvUIb7i5awHKxN8QiWS55pjtZive9pGeyD6eCkKLaCVljJ9v1Ke8yTW4mUNJSBvWvCrL48tS2Hv2EXl8QyIJGzaboya8IvU7LCVRdyb4juKSEM4hVaapDWMnsyW/+e/BnDvhC8RgMHGLmvDShHCiJoQAJiWkiY8AqXf5W0rX20XQK7uLlyaTKZjGoSbcNiCsaGkH0Eif5fEGpymqpskuZZ/lbgtV4ktJhEk8WXhMSWijBoSWmjAF7SkEhOBKFbNIl7INPDbwFZ5k7ZhEGDDPpSLMffVawo06r88MTWwBIWimidpxWMqiBAuu4prIkhu/xZ3CHq4ijBoQLvgmD2QDzH0x06wgpPHFWR0k5r4on8K/INhx5WM7xL0D/pKC8DGsWEO4Fzo1EAus8+kwhKBpLpXl3g9vm0W8oy1ouAd5joAYDNCEpYTHpxNYTfhs8wrCO0x7IZaQNs25Utcs0Q7HaFZGjyTspZaKZezIBEO4jpFAuCC+ASG8Cr8yxptCbSkIl2B9GqLDJWsMbVW6JsUhxG00RZGdjce32dqZhGW90U86nU4t/F/KRrvHJT7mbye5bCP8t2OAI5MpkR0yzechMyeM8zMVv0rJd9IJMp/HTHljGUMMnyMET2pTV6R4dhMcGCWXrPpr75cQjFcI60TBCO4zl2vLHW0wDJQIhAh++Jl1mMx9I5GQusy/H/oS69bcA7Ys/MgCMA96TbJ1E4Ff8zXcTTsqBHY06dqXUNN+4uKXIeyFvpQQZfQbn7eA6Q22ux8kJwRh+GWAGzxVyxQOnC0VhNAD3A54dxmZZFBTZkhFCOpG1sqCrWFKBLPSvpIQBkJLrcV43i0XGFSwe7Ap19U/fZKy+W68rj6sGfIGudmaXKYwMcFtxFKxv4XVZDRxELJm8hJmJSEcQMw+xbNZMaN3/AiusM/MF/zuZ7TTFLrRYx5IIIR5mM/Yh2XEjBjsaglhafaZ2aJmoMLepLgvmUgIY0P7A/bxmDANTcCR7UoGPdJ48P5pwIygB40ImaE+a+Bz9jZMcYWkoElKCNvpbQibjatlUS5G+BDZxsfSHR5hveQcmUPYblwuY3bmv3Q7WSkhMzizka6aOwwxmT40krLICZlNAR35fIMBSMTUcCl2rlYQMkYiHahvk7LlxxM5ioKQZRrerty5BGyNmsRQVBKyGVNrgHsHOexAZ+t9udlatdV2cOnFkO1JeyWHmpBJRV3NgSGGrIa/qjEqCJnKmps5qIbqIHZ5G4WWqSFks23X7YDUTcBFBML2qg0J2dLelTUYo5Fy1RRSX6YRIffWrGGY/t+IK2Xm91ZtQ8ipl5TfheMv5Gxy84y8aoQaQm4g0UHmX0caC34OjtIQNiTkEDedLFSlIRt+1TC7DqCWkEO8N5gr3qMEyGSTuPJ4oh0hV7ZwslDUwVpVL8l5gny2KKkesAkh780EkuXl3iK2MKuhrg82JeS9GVc+a7JnWaXCnOIaLdqCkAe6RWirswL/K7JGKOWSt3H9jTcmFEx90mAJlU4lEJeCWdbfdgtCZHFbexwj9MYhVNwDfW7/vS+r/qZbESIz466Ke/muZt5wR/IvEubcMNUWHRGKF7kt32Ibr4FEsTWwEi8Qij3vPlGte9Gd4B4fCRMknPqbfYkQRUIFygU33z4LGXFXMAU3cdy0C7YnlDmlXr4Ufk98ub0T20itJ6pFKFlL6jcfVu4hw3FVnFeVNeyKEJni0im/+bN2ut0ydo9BTEkfn8sGX7olVKxzscUWq7u4Kp9LLV3IpJkbo0soN/WHfAA97sKXu+ftMJBVusiGB/shRKls87Kzh43HNlTPfWsiCwc3w8lGFp9d0/ob64xQZQazMO8mzvq1bM7qMT3cdDLpp40CiQ4J0UThld7jHDKSrABdLfskn9Vlqtr5vJUN7IQQU6g6XeY9MrR+eGiWtjoewsdEU3+j0scLfhWH9xBizztT3vU6eZbuRMHm8E+15eA1c734efN+ol7AK2sYJ/VAiNC06i3NbKd49qblT50w8TYj23Vt+5IkThCRduc7I/WTwlGEFp82IX6PNYun/S7cMJ3I7LRpTZ3LumJmfS6LqiGJRqJNiIPjJtNPfsfHbLF27dEFv8b1IjvWkD3F1eh/HRJiCfvIhN+81h6aTLohxJ2p63lEa83uV0pXhFiC7ko1F21C3BrpkBBL3AXkIuykdRLplhBL8KLL9pSr2zb8q5XOCbFEyUshxmqedKA6BemDMJfIsbMWdMRx60H6InxIFG/utxq2U2Y72la9SnolfIg52cXJxT7cZ+PT1+oxOLY6HX/uB9tzplanSkUq/wMdMvXrdQ+GDQAAAABJRU5ErkJggg=="
            ,title:"On Sale"
            },
            {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_184624128.coreimg.100.300.png/1673882143014/dollardeals.png"
            ,title:"Rupees Deal"
        },
        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_535471926_1623657616.coreimg.100.300.png/1673882149636/valentines-day-icon.png"
        ,title:"Valentain's Day"
        },
        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_184147554.coreimg.100.300.png/1673882155758/body.png"
        ,title:"Personal Care"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_213107019.coreimg.100.300.png/1673882166209/cabinet.png"
        ,title:"Health"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_148673499.coreimg.100.300.png/1673882224853/mac.png"
        ,title:"Food And Beverage"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_535471926.coreimg.100.300.png/1673882220004/treats.png"
        ,title:"Pet"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_62860135.coreimg.100.300.png/1673882230389/lego.png"
        ,title:"Toys"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_145378025_570633916.coreimg.100.300.png/1673882236281/phones.png"
        ,title:"Electronics"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_124789933.coreimg.100.300.png/1673882242436/household.png"
        ,title:"Households"
        },
        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_145378025.coreimg.100.300.png/1673882256759/school-supplies-icon.png"
        ,title:"Office School Supply"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_194943053.coreimg.100.300.png/1673882263798/laundry.png"
        ,title:"Cleaning"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_940423767.coreimg.100.300.png/1673882269928/party-occasions-icon.png"
        ,title:"Party & Occasions"
        },

        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_213821596.coreimg.100.300.png/1673882276040/fluids.png"
        ,title:"Hardware"
        },
        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_180019887_945914675.coreimg.100.300.png/1673882282852/week31-baby.png"
        ,title:"Baby"
        },
        {img:"https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/image_copy_180019887.coreimg.100.300.png/1673882288638/tllaundry.png"
        ,title:"DC Brands"
        },
        ]

const Category = () => {
  return (
    <div alignItems="center" >
       <Grid marginLeft={150} width="80%" templateColumns='repeat(6, 0.75fr)' gap={4} alignItems="center" justifyContent={"center"} marginTop="20px" >
        {
           data.map((item)=>(
             <Link href="/product">
             <Card boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'>
                <CardBody>
                <GridItem>
                <Image marginLeft={5} w={120} h={120} src={item.img} alt={item.title}/>
               <Text  as='b'>{item.title}</Text>
             </GridItem>
                </CardBody>
             </Card>
             </Link>
           ))
        }
       </Grid>
    </div>
  );
}

export default Category;
