var no_teams = 5;
var a = [1,2,3,4,5,6,7,8,9,10];
var team_num = a.length/no_teams;
var one = new Array(no_teams);
var count = 1;
for(i = 0;i<one.length;i++)
    one[i] = [];

// for(j = 0,k=0;j<no_teams;j++)
// {
//     if(j%2 == 0){
//     for(;k<count*team_num;k++)
//     {   console.log("I am in",j);
//         one[j][k]=a[k];
//     }
//     }
//     else{
//         var l = k+no_teams;
//         for(;l<k;l--)
//         {
//             console.log("I am out");
//             one[j][l]=a[k];
//         }   
//     }
//     count++;
// }
k = 0;
for(i = 0;i<no_teams;i++)
{
    if(i == 0){
    for(j=0;j<team_num;j++)
    {
        one[j][i] = a[k];
        k++;
    }
    }
    else{
        for(j=team_num;j<0;j--)
        {
            one[j][i] = a[k];
            k++;
        }   
    }
}
console.log(one);
// for(i = 0,j=0;i<no_teams;)
// {
//     var two = [];
//     if(i%2 == 0)
//     {
//     for(;j<a.length;j+=5)
//         {
//         console.log(" "+j);
//         two.push(a[j]);
//         }
//     i++;
//     }
//     else
//     {
//         for(;j<a.length;j+=5)
//         {
//             console.log(" "+j);
//             two.push(a[j]);
//         }
//         i++;
//     }
//     j = i;
//     one.push(two);
// }
// console.log(two);
// console.log(one);
console.log(one);